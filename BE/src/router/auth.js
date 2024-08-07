import express from "express";
import { signInUser, signUpUser } from "../controller/auth.js";

const signUp = express.Router();

signUp
.post('/signup', signUpUser)
.post('/signin', signInUser
)

export { signUp }