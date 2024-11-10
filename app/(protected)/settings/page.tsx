import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

      <Link href="/users">
      <Button>
        All User
      </Button>
      </Link>
    </>
  );
};

export default page;
