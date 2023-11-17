import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 
import dataRoutes from './routes/dataRoutes.js';
import dotenv from 'dotenv';

//data imports
import Data from './models/data.js';
import { mainData } from './data/data.js';

// Configuration 
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

//routes
app.use(dataRoutes);

//mongoose
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.DB_URL).then(()=> {
    app.listen(PORT, () => console.log(`Server Port: ${PORT} connected successfully`));
    // only Add data one time
    // Data.insertMany(mainData);
})
.catch((error)=> console.log(`${error} did not connect`));