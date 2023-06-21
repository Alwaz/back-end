import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = `mongodb+srv://alwaz:${process.env.PASSWORD}@cluster0.a8rma8l.mongodb.net/`;

const PORT = process.env.PORT || 3000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening to ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
