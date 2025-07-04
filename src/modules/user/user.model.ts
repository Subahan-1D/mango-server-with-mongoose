import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: {
      type: String,
      required: true,

      validate: {
        validator: function (value) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        },
        message: (props) => `${props.value} is not valid`,
      },
      unique: true,
      immutable: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["Admin", "Customer"],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const User = model<IUser>("User", userSchema);

export default User;
