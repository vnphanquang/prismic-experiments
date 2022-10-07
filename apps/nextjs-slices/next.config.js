const withTM = require("next-transpile-modules")([]);

module.exports = withTM({
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  images: {
    domains: ['images.prismic.io', 'images.unsplash.com'],
  },
});
