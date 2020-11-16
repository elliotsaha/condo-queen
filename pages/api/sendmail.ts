const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

export default async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODE_MAILER_USERNAME,
      pass: process.env.NODE_MAILER_PASSWORD,
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Nodemailer Transporter Ready");
    }
  });

  transporter.sendMail({
    to: process.env.CONTACT_EMAIL,
    subject: `${req.body.name} Has Submitted a Contact Form`,
    html: `Name: ${req.body.name} <br/><br/> Email: ${req.body.email} <br/><br/> Message: ${req.body.paragraph}`,
  });
};
