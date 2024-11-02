import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "@/lib/db";
import authConfig from "@/auth.config";
import { getUserById } from "@/lib/actions/user.action";
import { UserRole } from "@/database/UserRole.enum";

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ token, session }) {
      console.log({ sessionToken: token });
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
  adapter: MongoDBAdapter(client),
  session: { strategy: "jwt" },
  ...authConfig,
});
