/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["upload.wikimedia.org", "enigmatic-sierra-33843.herokuapp.com"],
	},
};

module.exports = nextConfig;
