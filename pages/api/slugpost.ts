export {};
require("dotenv").config();
const axios = require("axios");

export default async (req, res) => {
  axios
    .get(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/entries?content_type=${process.env.CONTENTFUL_CONTENT_TYPE}&access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&fields.slug=${req.body.slug}`
    )
    .then((data) => {
      res.send(data)
      console.log(data)
    })
    .catch((err) => {
      res.send(err)
      console.log(err)
    });
};
