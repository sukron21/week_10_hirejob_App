/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  image: {
    domains: ["localhost", "week-10-hirejob-app-ermn.vercel.app", "res.cloudinary.com"],
  }
}

module.exports = nextConfig
