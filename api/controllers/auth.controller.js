import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  // we want to save username,email, password in database
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save(); // created new db
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
