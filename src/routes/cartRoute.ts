import express from "express";
import { getActiveCartForUser } from "../services/cartService";

const router = express.Router();

router.get ("/", async (req, res) => {
 // get userID from jwt after validating from middleware.
const cart = await getActiveCartForUser({
userId: "xxx"
})
res.status(200).send(cart);
})

export default router;