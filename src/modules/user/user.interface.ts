export interface IUser {
  name: string;
  phone: string;
  email: string;
  password: string;
  role: "Admin" | "Customer";
}
