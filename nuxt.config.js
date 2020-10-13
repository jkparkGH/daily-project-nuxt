const env = process.env.NODE_ENV;
const envSetting = require(`./nuxt.env.${env}.js`);
const metaTags = require("./nuxt.meta.js");
const plugins = require("./nuxt.plugins.js");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const src = "src";

module.exports = {
  srcDir: "src/",
  router: {
    base: "/",
    linkActiveClass: "active-link",
    extendRoutes(routes, resolve) {
      routes.push({
        name: "pageNotFound",
        path: "*",
        component: resolve(__dirname, src + "/pages/notfound.vue")
      });
    }
  },
  env: envSetting,
  loading: { color: "#000" },
  cache: true,
  head: metaTags,
  plugins: plugins,
  modules: ["@nuxtjs/style-resources"],
  styleResources: { scss: ["@assets/scss/preload.scss"] },
  build: {
    vendor: ["axios", "@nuxt/babel-preset-app", "babel-polyfill"],
    extractCss: true,
    babel: {
      presets({ isServer }) {
        return [
          [
            "@nuxt/babel-preset-app",
            {
              buildTarget: isServer ? "server" : "client",
              targets: isServer ? { node: "current" } : { ie: 10 }
            }
          ]
        ];
      },
      plugins({ isDev }) {
        if (isDev) {
          return [];
        } else {
          return ["transform-remove-console"];
        }
      }
    },
    extend(config, { isDev, isClient, isServer }) {
      config.devtool = "hidden-source-map";
      if (isDev && isClient) {
        config.module.rules.push(
          {
            enforce: "pre",
            test: /\.(js|vue)$/,
            loader: "eslint-loader",
            exclude: /(node_modules)/
          },
          {
            test: /\.js$/,
            use: {
              loader: "babel-loader",
              options: {
                plugins: ["@babel/plugin-syntax-dynamic-import"]
              }
            },
            exclude: /(node_modules)/
          }
        );
      }
      if (isServer) {
        config.externals = [nodeExternals({})];
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        _: "lodash",
        Promise: "es6-promise"
      })
    ]
  },
  serverMiddleware: [
    { path: "/health/check", handler: "~/serverMiddleware/healthCheck.js" }
  ],
  pageTransition: {
    name: "fade",
    mode: "out-in"
    // beforeEnter(el) {
    //   console.log("### enter page before ###", el);
    // }
  },
  layoutTransition: {
    name: "layout",
    mode: "out-in"
  }
};
