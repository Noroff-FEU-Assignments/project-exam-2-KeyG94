/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "enigmatic-sierra-33843.herokuapp.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
