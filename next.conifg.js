require("dotenv").config();

// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({/* my next config */})

module.exports = {
  env: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    contentful_space: process.env.CONTENTFUL_SPACE,
    contentful_access: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
};
