import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";
import cors from "cors";

const app = express()

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Define a root route
app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore API');
});

// connect to mongoDB 
mongoose.connect(URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// defining Route
app.use("/book",bookRoute)
app.use("/user",userRoute);
app.use("/contact",contactRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
