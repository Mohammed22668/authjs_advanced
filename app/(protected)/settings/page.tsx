import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const page = async () => {
  const session = await auth();
  return (
    <>
      <div>Settings Page {JSON.stringify(session)}</div>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button>LogOut</Button>
      </form>
    </>
  );
};

export default page;
