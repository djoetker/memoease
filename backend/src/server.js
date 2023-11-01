import dotenv from "dotenv";
import express from "express";
import { connectToDb } from "./service/db.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
const corsOptions = {
    "origin": "http://localhost:5173",
    "credentials": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};
app.use(cors(corsOptions));
await connectToDb();

app.listen(process.env.PORT, () => {
    console.log(`😊 Server running on http://localhost:${process.env.PORT}/`);
});