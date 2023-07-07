import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";
import "firebase/firestore";
import { auth } from "../../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await signInWithEmailAndPassword(auth, email, password);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
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
