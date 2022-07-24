const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "commflea@gmail.com",
    pass: "oevhplvuibipduzy",
  },
});

const mailOptions = {
  from: "commflea@gmail.com",
  to: "commflea@gmail.com",
  subject: "Sending Email using Node.js",
  text: "test",
};

exports.sendReqMail = functions.https.onRequest((req, res) => {
  return transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
