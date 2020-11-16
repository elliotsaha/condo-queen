export {};
import { createClient } from "contentful";
require("dotenv").config();

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default (req, res) => {
  client
    .getEntries({
      content_type: "post",
      "fields.slug[in]": req.body.slug,
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.send(err));
};
