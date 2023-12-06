const removeImports = require("next-remove-imports")();

/** @type {import('next').NextConfig} */
const nextConfig = removeImports({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
      },
    ],
  },
});

module.exports = nextConfig;
