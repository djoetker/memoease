import dotenv from "dotenv";
import express from "express";
import { connectToDb } from "./service/db.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
await connectToDb();

//404 error handler
app.all("*", (req, res, next) => {
  const error = new Error("Not found");
  error.statusCode = 404;
  error.status = "fail";

  next(error);
});

//Global error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    msg: err.message || "Internal Server Error",
    status: err.status || "error",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`😊 Server running on http://localhost:${process.env.PORT}/`);
});
