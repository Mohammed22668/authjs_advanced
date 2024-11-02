import { models, model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password?: string;
  image?: string;
  emailVerified: boolean;
  accounts: Schema.Types.ObjectId[];
  joinedAt: Date;
}

const UserSchema = new Schema({
  name: { type: String },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  image: { type: String },
  emailVerified: { type: Date },
  accounts: [{ type: Schema.Types.ObjectId, ref: "Account" }],
  joinedAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);

export default User;
