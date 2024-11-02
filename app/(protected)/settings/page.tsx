import React from "react";
import { auth } from "@/auth";

const page = async () => {
  const session = await auth();
  return <div>Settings Page {JSON.stringify(session)}</div>;
};

export default page;