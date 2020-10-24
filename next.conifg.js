require('dotenv').config();

module.exports = {
    env: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        contentful_space: process.env.CONTENTFUL_SPACE,
        contentful_access: process.env.CONTENTFUL_ACCESS_TOKEN
    },
  }
  