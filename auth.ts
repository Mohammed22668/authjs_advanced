import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { getUserById } from "@/lib/actions/user.action";
import { UserRole } from "@/database/UserRole.enum";

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async session({ token, session }) {
      console.log({ sessionToken: token });
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (token.username && session.user) {
        session.user.username = token.username as String;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;
      token.username = existingUser.username;
      token.role = existingUser.role;

      return token;
    },
  },

  session: { strategy: "jwt" },
  ...authConfig,
});
