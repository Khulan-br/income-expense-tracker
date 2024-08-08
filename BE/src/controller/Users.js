import { db } from "../db.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
    const { email, name, password, avatar_img, currency_type} = req.body
     
      const queryText = `
        INSERT INTO users (email, name, password, avatar_img, currency_type)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const saltRounds = 12;
        const myPlaintextPassword = 's0/\/\P4$$w0rD';
        const someOtherPlaintextPassword = 'not_bacon';
        
        bcrypt.hash(password, saltRounds, async (err, hash) => {
          try {
            const result = await db.query(queryText, [
              email,
              name,
              hash,
              avatar_img,
              currency_type,
            ]);
            return res.status(201).json(result.rows[0]);
          } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
          }
          console.log(hash);
        });    
};

    
export const getUsers =  async (req, res) => {
      const queryText = `
        SELECT *
        FROM users
        `;
      try {
        const result = await db.query(queryText);
        return res.send(result.rows);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Database error"});
      }
    };

export const getOneUser =  async (req, res) => {
const {id, email, name, currency_type} = req.body;
        const queryText = `
          SELECT *
          FROM users
          WHERE email = $1 or id = $2 or name = $3 or currency_type = $4`;
        try {
          const result = await db.query(queryText, [email, id, name, currency_type]);
          return result.rows
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "Database error"});
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
        return res.send(result.rows);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Database error"});
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
        return res.send("user deleted");
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Database error"});
      }
    };