/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // For deployment platforms like Render
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://b2b-tender-platform-yngf.onrender.com/api/:path*',
      },
    ];
  },
  // Ensure trailing slash is false for better compatibility
  trailingSlash: false,
  
  // Configure headers for static files
  async headers() {
    return [
      {
        source: '/_next/static/chunks/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/css; charset=utf-8',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig