/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(woff|woff2|otf|ttf)$/,
      use: 'url-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
