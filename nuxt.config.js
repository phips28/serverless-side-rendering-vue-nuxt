export default {
  head: {
    title: 'Vue Nuxt Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  build: {
    publicPath: `/${require('./secrets.json').NODE_ENV}/_nuxt/`,
  },
  buildModules: ['@nuxt/typescript-build'],
  srcDir: 'client/',
  performance: {
    gzip: false,
  },
  router: {
    base: '/',
  },
  // dev: false,
  typescript: {
    typeCheck: {
      eslint: { files: './**/*.{ts,js,vue}', enabled: true },
    },
  },
};
