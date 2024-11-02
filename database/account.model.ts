import { models, model, Schema, Document } from "mongoose";

// Define a schema for account

export interface IAccount extends Document {
  userId: Schema.Types.ObjectId;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expiresAt?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
}

const AccountSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  type: { type: String },
  provider: { type: String },
  providerAccountId: { type: String },
  refresh_token: { type: String },
  access_token: { type: String },
  expiresAt: { type: Number },
  token_type: { type: String },
});
AccountSchema.index({ provider: 1, providerAccountId: 1 }, { unique: true });

//{ type: Schema.Types.ObjectId, ref: "User" },
const Account = models.Account || model("Account", AccountSchema);

export default Account;
