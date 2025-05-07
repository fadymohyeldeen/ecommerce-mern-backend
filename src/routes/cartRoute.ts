import express, { Request, Response, NextFunction } from "express";
import { getActiveCartForUser } from "../services/cartService";
import validateJWT from "../middlewares/validateJWT";
const router = express.Router();

router.get(
  "/",
  validateJWT,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId = req.user?._id;
    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    try {
      const cart = await getActiveCartForUser({ userId: userId.toString() });
      res.status(200).json(cart); // Properly return a response
    } catch (err) {
      next(err); // Pass the error to the next middleware
    }
  }
);

export default router;
