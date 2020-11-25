export {};
require("dotenv").config();
var request = require("request");
import Cookies from "cookies";
var parseString = require("xml2js").parseString;

var options = {
  uri: "http://data.crea.ca/Object.svc/GetObject",
  auth: {
    user: process.env.CREA_USERNAME,
    pass: process.env.CREA_PASSWORD,
    sendImmediately: false,
  },
  headers: { "X-SESSIONID" : "f3b90a4b-eecb-473f-8879-9351df8bc0d5" },
};

export default (req, res) => {
  request(options, function (error, response, body) {
    if (error) {
      res.send(error);
    } else {
      console.log(response);
    }
  });
};
