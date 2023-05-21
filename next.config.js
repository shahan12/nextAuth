/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_CLIENT_ID:
      "827785021523-bgp04ure3biobim2n8rmlbfqkitekb5g.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
};

module.exports = nextConfig;
