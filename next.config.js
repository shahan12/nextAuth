/** @type {import('next').NextConfig} */
//"827785021523-bgp04ure3biobim2n8rmlbfqkitekb5g.apps.googleusercontent.com",
// "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"
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
};

module.exports = nextConfig;
