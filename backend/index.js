import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

const PORT = process.env.PORT || 5000;
connectDB();

//API Endpoints

app.get("/", (req, res) => {
  res.send("Welcome to ShieldUp Application");
});
app.use("/api/auth", authRoute);

app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));
