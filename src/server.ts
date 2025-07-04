import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import { Server } from "http";
import userRoute from "./modules/user/user.route";
const server = Server;
const app = express();
app.use(express.json());
app.use(cors());

app.use(userRoute);

app.get("/", (req: Request, res: Response) => {
  res.send({ success: true, message: "Welcome to mango server" });
});
async function main() {
  try {
    await mongoose.connect(config.database_uri!);
    console.log("Connected to the database..!");
    server: app.listen(config.port, () => {
      console.log(`Server is running on the port : ${config.port}`);
    });
  } catch (error) {
    console.log(`Server Error ${main}`);
  }
}

main();
