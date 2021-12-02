import express from "express";
const router = express.Router();
import { CreateUser, genpassword } from "../CreateMovie.js";

router.route("/signup").post(async (request, response) => {
  const { username, password } = request.body;
  const hashedpassword = await genpassword(password);
  const result = await CreateUser({ username, password: hashedpassword });
  response.send(result);
});

export const userRouter = router;
