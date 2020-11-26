"use strict";

require("dotenv").config(); // next.config.js


var withCSS = require("@zeit/next-css");

module.exports = withCSS({});
module.exports = {
  env: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    contentful_space: process.env.CONTENTFUL_SPACE,
    contentful_access: process.env.CONTENTFUL_ACCESS_TOKEN
  }
};