import path from 'path';
import dummyData from './src/store/data/dummy.js';

const env = process.env.NODE_ENV;
const envSetting = require(`./nuxt.env.${env}.js`);
const metaTags = require('./nuxt.meta.js');
const plugins = require('./nuxt.plugins.js');
const webpack = require('webpack');
const src = 'src';

module.exports = {
  target: 'static',
  env: envSetting,
  loading: { color: '#000' },
  cache: true,
  head: metaTags,
  plugins: plugins,

  srcDir: 'src/',

  router: {
    base: '/',
    linkActiveClass: 'active-link',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'pageNotFound',
        path: '*',
        component: resolve(__dirname, src + '/pages/notfound.vue'),
      });
    },
  },

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/eslint-module', '@nuxtjs/composition-api'],

  modules: [
    '@nuxtjs/style-resources',
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        },
      },
    ],
  ],

  styleResources: { scss: ['@/assets/scss/preload.scss'] },

  generate: {
    async routes() {
      return dummyData.dummyList.map((product) => {
        return `/products/${product.uid}`;
      });
    },
    interval: 2000,
  },

  build: {
    extractCss: true,
    babel: {
      plugins({ isDev }) {
        if (isDev) {
          return [];
        } else {
          return ['transform-remove-console'];
        }
      },
    },
    extend(config) {
      config.devtool = 'hidden-source-map';
    },
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
        Promise: 'es6-promise',
      }),
    ],
    transpile: ['vuex-composition-helpers'],
  },

  polyfill: {
    modules: ['nuxt-polyfill'],
  },

  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },

  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },

  components: [
    {
      path: '@/components',
      extensions: ['vue'],
    },
  ],
};
