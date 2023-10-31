import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
  // we want to save username, email, password in database
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save(); // created new db
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
    // res.status(500).json(error.message);
  }
};
