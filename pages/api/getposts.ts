export {}
import { createClient } from "contentful";
require("dotenv").config();

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export default (req, res) => {
  client.getEntries({ content_type: "post" }).then((data) => {
    res.status(200).send(data)
  }).catch(err => res.status(400).send(err))
};
