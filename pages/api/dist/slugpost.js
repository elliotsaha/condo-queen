"use strict";
exports.__esModule = true;
var contentful_1 = require("contentful");
require("dotenv").config();
var client = contentful_1.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});
exports["default"] = (function (req, res) {
    client
        .getEntries({
        content_type: "post",
        "fields.slug[in]": req.body.slug
    })
        .then(function (data) {
        res.send(data);
    })["catch"](function (err) { return res.send(err); });
});
