import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Connected to Mongo DB`);
  })
  .catch((err) => {
    console.log(err);
  });

//* routes
app.use('/api/user', userRouter);

//* server running
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
