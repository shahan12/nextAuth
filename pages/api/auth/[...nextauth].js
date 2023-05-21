import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "../../../models/user";
import bcrypt from "bcryptjs";
import dbConnect from "../../../config/dbConnect";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   async authorize(credentials, req) {
    //     dbConnect();

    //     const { email, password } = credentials;

    //     const user = await User.findOne({ email });

    //     if (!user) {
    //       throw new Error("Invalid Email or Password");
    //     }

    //     const isPasswordMatched = await bcrypt.compare(password, user.password);

    //     if (!isPasswordMatched) {
    //       throw new Error("Invalid Email or Password");
    //     }

    //     return user;
    //   },
    // }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async redirect() {
      return "/dashboard";
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
