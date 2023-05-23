/** @type {import('next').NextConfig} */
//process.env.GOOGLE_CLIENT_ID :"827785021523-bgp04ure3biobim2n8rmlbfqkitekb5g.apps.googleusercontent.com",
// process.env.GOOGLE_CLIENT_SECRET :"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"
// process.env.NEXTAUTH_SECRET :shahanProject
//NEXTAUTH_URL: http://localhost:3000/
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
  },
};

module.exports = nextConfig;
