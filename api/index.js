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

// server running
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
