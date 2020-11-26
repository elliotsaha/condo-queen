export {};
require("dotenv").config();
var request = require("request");
import Cookies from "cookies";
var parseString = require("xml2js").parseString;

var options = {
  uri: "https://data.crea.ca/Login.svc/Login",
  auth: {
    user: process.env.CREA_USERNAME,
    pass: process.env.CREA_PASSWORD,
    sendImmediately: false,
  },
};

export default (req, res) => {
  request(options, function (error, response, body) {
    if (error) {
      res.json(error);
    } else {
      //  Gets session id
      var a = response.headers["set-cookie"][1];
      var b = a
        .split("=")
        .join(",")
        .split(":")
        .join(",")
        .split(";")
        .join(",")
        .split(",");

      const cookies = new Cookies(req, res);

      cookies.set(b[0], b[1]);
      res.send("Authenticated");
    }
  });
};
