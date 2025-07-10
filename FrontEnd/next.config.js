/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://b2b-tender-platform-yngf.onrender.com/api/:path*',
      },
    ];
  },
}

module.exports = nextConfig