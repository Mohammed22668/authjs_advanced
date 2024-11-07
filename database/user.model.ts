import { models, model, Schema, Document } from "mongoose";
import { UserRole } from "./UserRole.enum";

export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password?: string;
  image?: string;
  role: UserRole;
  emailVerified: boolean;

  joinedAt: Date;
}

const UserSchema = new Schema({
  name: { type: String },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  image: { type: String },
  role: {
    type: String,
    enum: Object.values(UserRole), // Restrict to values from UserRole enum
    default: UserRole.User, // Default to UserRole.User
  },
  emailVerified: { type: Date },

  joinedAt: { type: Date, default: Date.now },
});

const User = models?.User || model("User", UserSchema);

export default User;
