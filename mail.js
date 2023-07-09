const nodemailer = require("nodemailer");

/**
 * Get nodemailer mail transporter
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

async function sendMail() {
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_RECEIVER,
    subject: process.env.MAIL_SUBJECT,
    text: process.env.MAIL_TEXT,
  };
  await transporter.sendMail(mailOptions);
  console.log(`Email sent to ${process.env.MAIL_RECEIVER}`);
}

module.exports = {
  sendMail,
};
