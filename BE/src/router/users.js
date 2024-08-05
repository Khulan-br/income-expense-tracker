import express from "express";
import { createUser, deleteUser, getOneUser, getUsers, updateUser } from "../controller/Users.js";


const users = express.Router();

users
.get('/', getUsers)
.get('/get/:id', getOneUser)
.post('/create', createUser)
.put('/:id', updateUser)
.delete('/delete/:id', deleteUser)

export { users }
