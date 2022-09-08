import express from "express";
import connectDB from './db/connectDb.js';
import web from './routes/web.js';
const app = express();
import cors from 'cors';
import 'dotenv/config';
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;


import { v2 as cloudinary } from 'cloudinary'

// Return "https" URLs by setting
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET  
});
//Database Connection
connectDB(DATABASE_URL);

//FOR CORS Policy
 app.use(cors());

//connecting folder
app.use(express.static('public'));

//JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Load Routes
app.use('/api', web);

app.listen(port, ()=> {
    console.log(`Server listening at http://localhost:${port}`);
});
