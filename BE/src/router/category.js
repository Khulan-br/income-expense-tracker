import express from "express";
import { createCategory, deleteCategory, getCategory, getOneCategory, updateCategory } from "../controller/Category.js";



const category = express.Router();

category
.get('/category', getCategory)
.get('/category/:id', getOneCategory)
.post('/category/create', createCategory)
.put('/category/update/:id', updateCategory)
.delete('/category/delete/:id', deleteCategory)

export { category }