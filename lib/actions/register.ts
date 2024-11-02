"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcryptjs";
import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { getUserByEmail } from "./user.action";

export async function register(values: z.infer<typeof RegisterSchema>) {
  try {
    // Connect to the database
    connectToDatabase();

    // Validate input fields
    const validateFields = RegisterSchema.safeParse(values);

    if (!validateFields.success) {
      return { error: "Invalid fields" };
    }

    const { email, name, password, username } = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if a user with the same email already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return { error: "Email already exists!" };
    }

    // Create the new user
    await User.create({
      email,
      name,
      password: hashedPassword,
      username,
    });

    return { success: "User created successfully!" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to create user." };
  }
}
