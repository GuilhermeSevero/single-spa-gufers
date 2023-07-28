// Create SingleSPA - Root or Applications
npx create-single-spa

// import React
"react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
"react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js"

// Add Single SPA into a created Vue application
npx @vue/cli add single-spa

// set-public-path.js
import { setPublicPath } from 'systemjs-webpack-interop';

setPublicPath('appName');

// -----------------

//Config do WebPack
  chainWebpack(config) {
    config.plugin('SystemJSPublicPathWebpackPlugin').tap((args) => {
      args[0].rootDirectoryLevel = 1;
      return args;
    });
  },
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },


  config.externals([/^@gufers\/*/]);
