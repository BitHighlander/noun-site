const IPFS_GATEWAY =
    process.env.NEXT_PUBLIC_IPFS_GATEWAY || "https://gateway.pinata.cloud";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Wildcard for any hostname
        port: "",
        pathname: "**", // Wildcard for any pathname
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/token/:tokenid",
        destination: "/?tokenid=:tokenid",
      },
    ];
  },
};

module.exports = nextConfig;
