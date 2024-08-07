
import { createUser, getOneUser } from "../controller/Users.js";
import bcrypt from "bcrypt";

export const signUpUser = async (req, res) => {
    try {
      const user = await createUser(req, res);
      return res.json({success: true, user: user});
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "something went wrong"});
      }
};

export const signInUser = async (req, res) => {
    const {email, password} = req.body;
      try {
        const user = await getOneUser(req, res);
        bcrypt.compare(password, user[0].password, (err, result) => {
          if (result) {
            res.send({ success: true, user: user });
          } else {
            res.send({ error: "Invalid email or password" });
          }
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
      }
};