// import User from "..user.js";

import {User} from "../models/User.js";
import db from '../db/conn.js';

const usersCollection = db.collection('employee');

export const login = async (req, res) => {
    const { EmployeeID, password } = req.body;
  
    try {
      // Find the user with the specified EmployeeID
      const user = await usersCollection.findOne({ EmployeeID });
  
      // // If the user doesn't exist or the password is incorrect, send an error response
      // const isPasswordCorrect = await bcrypt.compare(
      //   password,
      //   user.Password
      // )
      if (!user || !(password===user.Password)) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
      res.json({ "EmployeeID": EmployeeID });
  
      // // If the authentication is successful, generate a JWT
      // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  
      // // Send the token in the response
      // res.json({ token });
    } catch (err) {
      console.error('Failed to authenticate user:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  export const user = async (req, res) => {


  }