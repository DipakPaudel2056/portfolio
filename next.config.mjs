/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dipak-portfolio-asset.s3.ap-southeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
