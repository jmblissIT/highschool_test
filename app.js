import express from "express";
import connectDB from './db/connectDb.js';
import web from './routes/web.js';
const app = express();
import cors from 'cors';
import 'dotenv/config'
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

//Database Connection
connectDB(DATABASE_URL);

//FOR CORS Policy
app.use(cors());

//JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Load Routes
app.use('/api', web);

app.listen(port, ()=> {
    console.log(`Server listening at http://localhost:${port}`);
});
