import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; 
import bcrypt from "bcrypt";
import connectDB from "../../../../../lib/config/db";
import { User } from "../../../../../lib/models/user.model";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error("No user found");

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isPasswordValid) throw new Error("Incorrect password");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          profilePicture: user.profilePicture,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.profilePicture = user.profilePicture;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.profilePicture = token.profilePicture;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
