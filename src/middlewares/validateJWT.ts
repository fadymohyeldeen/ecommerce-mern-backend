import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { userModel } from "../models/userModel";

const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader = req.get("authorization");

  if (!authorizationHeader) {
    res.status(403).send("Authorization Header was not provided!");
    return; 
  }

  const token = authorizationHeader.split(" ")[1];

  if (!token) {
    res.status(403).send("Token not found!");
    return; 
  }

  try {
    const payload = jwt.verify(token, "1njhzsbu6u6gzwlrpzxw5xelcaevpdrvxl");

    if (typeof payload === "string" || !payload) {
      res.status(403).send("Invalid token payload!");
      return;
    }

    const user = await userModel.findOne({ email: (payload as any).email });

    if (!user) {
      res.status(404).send("User not found!");
      return;
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(403).send("Invalid token!");
  }
};

export default validateJWT;
