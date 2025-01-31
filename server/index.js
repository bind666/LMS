import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import userRoute from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

dotenv.config({});
const PORT = process.env.PORT || 6000;

//call database connection
connectDB();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5000",
    credentials: true
}))

//apis 
app.use("/api/v1/user", userRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})  