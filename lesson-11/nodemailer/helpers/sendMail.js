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

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendMail = async (data) => {
  const mail = { ...data, from: "mykytazviahin@meta.ua" };

  transporter
    .sendMail(mail)
    .then(() => console.log("Mail sent"))
    .catch((e) => console.log(e.message));
};

module.exports = sendMail;
