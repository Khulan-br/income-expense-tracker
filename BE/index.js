import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { db } from "./src/db.js";
import { category } from "./src/router/category.js";
import { record } from "./src/router/record.js";
import { users } from "./src/router/users.js";
import { signUp } from "./src/router/auth.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use('/', users);
app.use('/', record);
app.use('/', category);
app.use('/', signUp)


app.get("/installExtension", async (req, res) => {
  const tableQueryText = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
  try {
    db.query(tableQueryText);
    res.send("success");
  } catch (error) {
    console.error(error)
    res.send(error.message)
  }
});

app.get("/createTable", async (req, res) => {
 
  const tableQueryText = `
   CREATE TABLE IF NOT EXISTS users (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        email VARCHAR(255) UNIQUE,
        name VARCHAR(255) NOT NULL,
        password TEXT,
        avatar_img TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        currency_type currency_type DEFAULT 'USD' NOT NULL
    )`;

  try {
    const res = await db.query(tableQueryText);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
  res.send("Table created");
});

app.get("/record", async (req, res) => {
 
  const tableQueryText = `
   CREATE TABLE IF NOT EXISTS record (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id uuid REFERENCES users ON DELETE RESTRICT,
        category_id uuid,
        FOREIGN KEY user_id,
        references user(id),
        FOREIGN KEY category_id,
        references category(id),
        name TEXT,
        amount FLOAT,
        transaction_type transaction_type DEFAULT 'INC' NOT NULL,
        description TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

  try {
    const res = await db.query(tableQueryText);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
  res.send("Table of record have just created");
});


  app.get("/category", async (req, res) => {
 
    const tableQueryText = `
     CREATE TABLE IF NOT EXISTS category (
          id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
          name VARCHAR(255),
          description TEXT,
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          category_image TEXT
      )`;
  
    try {
      const res = await db.query(tableQueryText);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
    res.send("Table of category have just created");
  });

app.listen(port, () => {
  console.log(`My backend listening on port ${port}`);
});
