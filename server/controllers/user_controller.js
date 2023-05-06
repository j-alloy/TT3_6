// import User from "..user.js";

import {User} from "../models/User.js";


export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user with the specified EmployeeID
      const user = await User.findOne({ EmployeeID });
      
  
      // If the user doesn't exist or the password is incorrect, send an error response
      if (!user || !user.comparePassword(password)) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      // If the authentication is successful, generate a JWT
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  
      // Send the token in the response
      res.json({ token });
    } catch (err) {
      console.error('Failed to authenticate user:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };