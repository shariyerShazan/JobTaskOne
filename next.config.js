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
        },
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: '**',
          port: '',
          pathname: '/**',
        },
      ]
    }
  };
  
  module.exports = nextConfig;
  