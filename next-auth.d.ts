import { type DefaultSession } from "next-auth";
import { UserRole } from "@/database/UserRole.enum";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  username: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
