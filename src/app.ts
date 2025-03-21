import express,{ Request,Response } from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
import router from './routes/studentRoute';
import {connectDB} from './config/db';
import { connect } from "http2";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'Public')));
app.set("view engine","ejs");   
app.set("views", path.join(__dirname, "../src/views"));
connectDB();
app.use('/',router)

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})