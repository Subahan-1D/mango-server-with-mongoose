import { Router } from "express";
import { userGetData, userRegister } from "./user.controler";

const userRoute = Router();

userRoute.post("/user", userRegister);
userRoute.get("/user", userGetData);

export default userRoute;
