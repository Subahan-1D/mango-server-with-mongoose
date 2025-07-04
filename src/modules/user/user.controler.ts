import { Request, Response } from "express";
import User from "./user.model";

const userRegister = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const user = new User(payload);

    const data = await user.save();
    res.status(200).json({
      success: true,
      message: "User register successfully",
      data,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
};
const userGetData = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    res.status(200).json({
      success: true,
      message: "User retrieve successfully",
      data: user,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
};

export { userRegister, userGetData };
