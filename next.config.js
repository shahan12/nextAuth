/** @type {import('next').NextConfig} */
//process.env.GOOGLE_CLIENT_ID :"827785021523-bgp04ure3biobim2n8rmlbfqkitekb5g.apps.googleusercontent.com",
// process.env.GOOGLE_CLIENT_SECRET :"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"
// process.env.NEXTAUTH_SECRET :shahanProject
//process.env.NEXTAUTH_URL: http://localhost:3000/
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    NEXTAUTH_SECRET: "shahanProject",
    NEXTAUTH_URL: "http://localhost:3000/",
    GOOGLE_CLIENT_ID:
      "827785021523-bgp04ure3biobim2n8rmlbfqkitekb5g.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    NEXT_PUBLIC_FIREBASE_API: "AIzaSyDq-XZEkqdmwCIuAcj8L8ZmDH512SvjKIU",
    NEXT_PUBLIC_FIREBASE_DOMAIN: "next-auth-76911.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECTID: "next-auth-76911",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "784608929708",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "next-auth-76911.appspot.com",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:784608929708:web:961e05abc851ad686abc09",
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: "G-6562RE6L65",
  },
};

/**
 *   
 * apiKey: "AIzaSyDq-XZEkqdmwCIuAcj8L8ZmDH512SvjKIU",
  authDomain: "next-auth-76911.firebaseapp.com",
  projectId: "next-auth-76911",
  storageBucket: "next-auth-76911.appspot.com",
  messagingSenderId: "784608929708",
  appId: "1:784608929708:web:961e05abc851ad686abc09",
  measurementId: "G-6562RE6L65"
 */

module.exports = nextConfig;
