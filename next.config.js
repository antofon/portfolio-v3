/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  images: {
    unoptimized: true,
  },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/portfolio': {
  //       page: '/portfolio',
  //     },
  //     '/stemreads': {
  //       page: '/stemreads',
  //     },
  //     '/twitch': { page: '/twitch' },
  //     '/wikipedia': {
  //       page: '/wikipedia',
  //     },
  //     '/art': { page: '/art' },
  //     '/facebook': { page: '/facebook' },
  //     '/guru': { page: '/guru' },
  //   };
  // },
};

module.exports = nextConfig;
