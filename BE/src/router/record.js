import express from "express";
import { createRecord, deleteRecord, getOneRecord, getRecord, updateRecord } from "../controller/Record.js";

const record = express.Router();

record
.get('/record', getRecord)
.get('/record/:id', getOneRecord)
.post('/record/create', createRecord)
.put('/record/update/:id', updateRecord)
.delete('/record/delete/:id', deleteRecord)

export { record }