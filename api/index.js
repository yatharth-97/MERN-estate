import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Connected to Mongo DB`);
  })
  .catch((err) => {
    console.log(err);
  });

// this will allow json as input of the server
app.use(express.json());
// routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message, // message: message (after ES6 no need to do this)
  });
});

// server running
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
