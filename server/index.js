// app.js
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import authRouter from "./routes/auth";
import indexRouter from "./routes/index";
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api", indexRouter);
app.use("/auth", authRouter);

export default app;
