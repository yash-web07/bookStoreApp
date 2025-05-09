import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";
import cors from "cors";

const app = express()

// Enable CORS for all origins (or specify the frontend URL)
app.use(cors({
  origin: 'https://bookstoreapp-1-1wz8.onrender.com'  // Add your frontend URL here
}));
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB 
try{
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Connected to mongoDB");

}catch(error){
  console.log("ERROR: ",error);
}

// defining Route
app.use("/book",bookRoute)
app.use("/user",userRoute);
app.use("/contact",contactRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})