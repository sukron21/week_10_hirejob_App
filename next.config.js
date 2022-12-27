/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["localhost", "week-10-hirejob-app-ermn.vercel.app", "res.cloudinary.com"],
  }
}

module.exports = nextConfig
