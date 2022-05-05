import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";
const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/users", userRouter);
app.use("/tour", tourRouter);

const MONGODB_URL =
  "mongodb+srv://RoughGhost:Alreadyours007@cluster0.93kcv.mongodb.net/tour_db?retryWrites=true&w=majority";

const port = 5000;

// mongodb+srv://RoughGhost:<password>@cluster0.93kcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
