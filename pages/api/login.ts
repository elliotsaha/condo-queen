export {};
require("dotenv").config();
var request = require("request");
import Cookies from 'cookies'
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
      res.json(error)
    } else { //  Gets session id
      // res.cookie(response.headers["set-cookie"][1])
      Cookies.set("name", "value")
      res.send("")
    }
  });
};
