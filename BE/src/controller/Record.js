import { db } from "../db.js";


export const getRecord = async (req, res) => {
  const queryText = `SELECT * FROM record`;  
  try {
    const result = await db.query(queryText);
    return res.send(result.rows);
  } catch (error) {
    console.error(error);
    return res.send("error");
  }
};

export const getOneRecord = async (req, res) => {
  const {id, user_id, category_id, name, transaction_type} = req.body;
  const queryText = `
    SELECT *
    FROM users
    WHERE id = $1 or user_id = $2 or category_id = $3 or transaction_type = $4`;
  try {
    const result = await db.query(queryText, [id, user_id, category_id, name, transaction_type]);
    return result.rows
  } catch (error) {
    console.error(error);
    return res.send("error")
  }
};

export const createRecord = async (req, res) => {
    const { user_id, name, amount, transaction_type, description, category_id } = req.body
    
      const queryText = `
        INSERT INTO record (user_id, name, amount, transaction_type, description, category_id)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
        `;
    
      try {
        const result = await db.query(queryText, [
          user_id,
          name,
          amount,
          transaction_type,
          description,
          category_id
        ]);
        return res.status(201).json(result.rows[0]);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Database error"});
      }
    };
  
export const updateRecord = async (req, res) => {
      const {id} = req.params;
      const {user_id, name, amount, transaction_type, description, category_id} = req.body;
    
      try {
        const result = await db.query(`
        UPDATE record
        SET user_id = $1, name = $2, amount = $3, transaction_type = $4, description = $5, category_id = $6
        WHERE id = $7
        RETURNING *`,
        [user_id, name, amount, transaction_type, description, category_id, id]
        );
        return res.send(result.rows);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Database error"});
      }
    };
    
export const deleteRecord = async (req, res) => {
      const {id} = req.params;
    
      try {
        const result = await db.query(`
        DELETE FROM record
        WHERE id = $1`,
        [id]
        );
        return res.send("user deleted");
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Database error"});
      }
    };