import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(morgan("dev"));

const { PORT } = process.env;

app.set("port", PORT || 5000);

export default app;
