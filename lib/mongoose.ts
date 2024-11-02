// import mongoose from "mongoose";

// let isConnected: boolean = false;

// export const connectToDatabase = async () => {
//   mongoose.set("strictQuery", true);
//   // check connection link
//   if (!process.env.MONGODB_URI) return console.log("MISSING MONGODB_URI");
//   // check if db is connected
//   if (isConnected) {
//     return console.log("Mongo DB is already connected");
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "auth_advanced",
//     });
//     isConnected = true;
//     console.log("MongoDB is connected");
//   } catch (error) {
//     console.log("MongoDB is not connected", error);
//   }
// };

import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  // Check if MONGODB_URI is set
  if (!process.env.MONGODB_URI) {
    console.error('Missing environment variable: "MONGODB_URI"');
    return;
  }

  // Check if the database is already connected
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    // Connect to MongoDB without deprecated options
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "auth_advanced",
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
