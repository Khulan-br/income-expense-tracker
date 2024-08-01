import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import fs from "node:fs";
import { db } from "./db.js";
const app = express();
const port = 8000;

// const data = [];

// app.get('/addData', (req, res) => {

//     data.push(Math.random())
//     res.send("successful!");
// })

// app.get('/getData', (req, res) => {
//     res.send(data);
// })

// const data = [];

app.use(bodyParser.json());
app.use(cors());

// app.post('/addData', (req, res) => {
//     console.log(req.body, 'request');

//     data.push(req.body);
//     res.send(req.body)
// })

// app.get('/getData', (req, res) => {
//     res.send(data)
// })


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

app.get("/users", async (req, res) => {
 
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

app.post("/users/create", async (req, res) => {
const { email, name, password, avatar_img} = req.body

  const queryText = `
    INSERT INTO users (email, name, password, avatar_img)
    VALUES ($1, $2, $3, $4) RETURNING *
    `;

  try {
    const result = await db.query(queryText, [
      email,
      name,
      password,
      avatar_img
    ]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error"});
  }
});

// app.get("/User", async (req, res) => {
//   const queryText = `
//     SELECT *
//     FROM users
//     `;

//   try {
//     const result = await db.query(queryText);
//     res.send(result.rows);
//   } catch (error) {
//     console.error(error);
//   }
// });

app.put("/users/id", async (req, res) => {
  const queryText = `
    UPDATE users
    SET
    WHERE
    `;

  try {
    const result = await db.query(queryText);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
  }
});

// app.post('/write', (req, res) => {
//     const {body} = req;
//     const data = new Uint8Array(Buffer.from(JSON.stringify(body)))
//     fs.writeFile("./DATA.txt", data, 'utf8', (err, data) => {
//     res.send('success!');
//     })
// })

// app.get('/read', (req, res) => {

//     fs.readFile("./DATA.txt", "utf8", function(err, data) {
//         res.send(data);
//       });
// })

app.listen(port, () => {
  console.log(`My backend listening on port ${port}`);
});
