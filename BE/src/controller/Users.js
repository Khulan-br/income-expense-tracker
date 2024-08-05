import { db } from "../db.js";

export const createUser = async (req, res) => {
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
    };
    
export const getUsers =  async (req, res) => {
      const queryText = `
        SELECT *
        FROM users
        `;
      try {
        const result = await db.query(queryText);
        res.send(result.rows);
      } catch (error) {
        console.error(error);
      }
    };

export const getOneUser =  async (req, res) => {
const {id} = req.params;
console.log(id)
        const queryText = `
          SELECT *
          FROM users
          WHERE id = $1
          `;
        try {
          const result = await db.query(queryText, [id]);
          res.send(result.rows);
        } catch (error) {
          console.error(error);
        }
      };
    
export const updateUser =  async (req, res) => {
      const {id} = req.params;
      const {email, name, password, avatar_img} = req.body;
    
      try {
        const result = await db.query(`
        UPDATE users
        SET email = $1, name = $2, password = $3, avatar_img = $4
        WHERE id = $5
        RETURNING *`,
        [email, name, password, avatar_img, id]
        );
        res.send(result.rows);
      } catch (error) {
        console.error(error);
      }
    };
    
export const deleteUser =  async (req, res) => {
      const {id} = req.params;
    
      try {
        const result = await db.query(`
        DELETE FROM users
        WHERE id = $1`,
        [id]
        );
        res.send("user deleted");
      } catch (error) {
        console.error(error);
      }
    };