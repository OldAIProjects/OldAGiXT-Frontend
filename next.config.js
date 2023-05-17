/** @type {import('next').NextConfig} */

const nextConfig = {

  reactStrictMode: true,

  serverRuntimeConfig: {

    // Increase the maxInactiveAge to 5 minutes (300000 ms)

    maxInactiveAge: 300000,

    // Increase the number of pages that can be built concurrently

    concurrentFeatures: 10,

  },
  "staticPageGenerationTimeout": 240,
};

module.exports = nextConfig;
