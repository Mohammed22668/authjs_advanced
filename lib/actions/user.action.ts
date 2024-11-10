"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";

export async function getUserByEmail(email: string) {
  try {
    connectToDatabase();
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserById(id: string) {
  try {
    connectToDatabase();
    const user = await User.findOne({ id });
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserByUsername(username: string) {
  try {
    connectToDatabase();
    const user = await User.findOne({ username });
    return user;
  } catch (error) {
    console.log(error);
  }
}
