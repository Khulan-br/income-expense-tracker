import { db } from "../db.js";


export const getCategory = async (req, res) => {

  const queryText = `SELECT * FROM category`;  
  try {
    const result = await db.query(queryText);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
  }
  };

export const getOneCategory = async (req, res) => {
  const {id, name, description} = req.body;
        const queryText = `
          SELECT *
          FROM users
          WHERE id = $1 or name = $2 or description = $3`;
        try {
          const result = await db.query(queryText, [id, name, description]);
          return result.rows
        } catch (error) {
          console.error(error);
        }
      };


export const createCategory = async (req, res) => {
    const { name, description, category_image } = req.body
    
      const queryText = `
        INSERT INTO category (name, description, category_image)
        VALUES ($1, $2, $3) RETURNING *
        `;
    
      try {
        const result = await db.query(queryText, [
          name,
          description,
          category_image
        ]);
        res.status(201).json(result.rows[0]);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error"});
      }
    };
  
export const updateCategory = async (req, res) => {
      const {id} = req.params;
      const { name, description, category_image } = req.body;
    
      try {
        const result = await db.query(`
        UPDATE category
        SET name = $1, description = $2, category_image = $3
        WHERE id = $4
        RETURNING *`,
        [name, description, category_image, id]
        );
        res.send(result.rows);
      } catch (error) {
        console.error(error);
      }
    };
    
export const deleteCategory = async (req, res) => {
      const {id} = req.params;
    
      try {
        const result = await db.query(`
        DELETE FROM category
        WHERE id = $1`,
        [id]
        );
        res.send("user deleted");
      } catch (error) {
        console.error(error);
      }
    };