import express from "express";
import { signInUser, signUpUser } from "../controller/auth.js";

const auth = express.Router();

auth
.post('/signup', signUpUser)
.post('/signin', signInUser
)

export { auth }