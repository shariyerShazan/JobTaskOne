/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "picsum.photos"
        },
        {
          protocol: "https",
          hostname: "i.pravatar.cc"
        },
        {
          protocol: "https",
          hostname: "encrypted-tbn0.gstatic.com"
        }
      ]
    }
  };
  
  module.exports = nextConfig;
  