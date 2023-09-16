const mongoose = require("mongoose");
const mailSender = require("../utils/MailSend");

const OTPschema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  OTP: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 5 * 60, // The document will be automatically deleted after 5 minutes of its creation time
  },
});

async function sendVerificationMail(email, otp) {
  try {
    const mailSenderResult = await mailSender(
      "otp verification",
      `this is you otp: ${otp}`,
      email
    );
    console.log("mailsender result", mailSenderResult);
  } catch (error) {
    console.log("error in email verification", error);
  }
}

OTPschema.pre("save", async function (next) {
  if (this.isNew) {
    await sendVerificationMail(this.email, this.OTP);
  }
  next();
});

const OTP = mongoose.model("OTP", OTPschema);
module.exports = OTP;
