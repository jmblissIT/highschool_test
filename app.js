import express from "express";
import connectDB from './db/connectdb.js';
import web from './routes/web.js';
const app = express();
import cors from 'cors';
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://jmbliss13:vksv2021@highschoolfootball.bh8s4zf.mongodb.net/test";

//Database Connection
connectDB(DATABASE_URL);

//JSON
app.use(express.json());
app.use(cors());
//Load Routes
app.use('/api', web);

app.listen(port, ()=> {
    console.log(`Server listening at http://localhost:${port}`);
});
