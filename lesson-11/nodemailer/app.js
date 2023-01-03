const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, // 25,
  secure: true,
  auth: {
    user: "mykytazviahin@meta.ua",
    pass: META_PASSWORD,
  },
};

const mail = {
  to: "mykytazviahin@gmail.com",
  from: "mykytazviahin@meta.ua",
  subject: "New mail",
  html: "<p>New mail</p>",
};

const transporter = nodemailer.createTransport(nodemailerConfig);

transporter
  .sendMail(mail)
  .then(() => console.log("Mail sent"))
  .catch((e) => console.log(e.message));
