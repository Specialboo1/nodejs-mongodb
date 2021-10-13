import express  from "express";
import cors from "cors";
import mongoose  from "mongoose";
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();
app.use(cors({
    origin: "*"
}))
app.use(express.json())

app.use('/', postRoutes)


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=> console.log(`Server is running on port : ${PORT} `)))
    .catch((err)=> console.log(err))
