/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    reactStrictMode: true,
    env: {
      BASE_URL: process.env.BASE_URL,
      DATABASE_URL:process.env.DATABASE_URL,
      JWT_SECRET:process.env.JWT_SECRET,
      SECRET:process.env.SECRET,
      NEXTAUTH_URL:process.env.NEXTAUTH_URL,
      NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET

    }
  }
