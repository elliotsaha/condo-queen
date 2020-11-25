export {};
require("dotenv").config();
const nodefetch = require("node-fetch");
const axios = require("axios");

export default async (req, res) => {
  nodefetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/entries?content_type=${process.env.CONTENTFUL_CONTENT_TYPE}&access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&fields.slug=${req.body.slug}`
  )
    .then(function (u) {
      return u.json();
    })
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
};

