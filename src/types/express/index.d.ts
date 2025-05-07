console.log("Type augmentation loaded!");
import { IUser } from "../../models/userModel";
// src/types/express/index.d.ts
declare global {
  namespace Express {
    interface Request {
      user: IUser; 
    }
  }
}

export {};
