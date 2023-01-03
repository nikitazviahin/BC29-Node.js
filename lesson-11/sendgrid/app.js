const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const mail = {
  to: "mykytazviahin@gmail.com",
  from: "mykytazviahingoit@gmail.com",
  subject: "New mail",
  html: "<p>New mail</p>",
};

sgMail
  .send(mail)
  .then(() => console.log("Mail sent"))
  .catch((e) => console.log(e.message));
