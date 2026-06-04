const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/send-mail", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const message = {
      from: `"Super Admin" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome",
      html: `
        <h2>Welcome</h2>
        <p>Your email: ${email}</p>
        <p>Your password: ${password}</p>
      `
    };

    const info = await transporter.sendMail(message);
    return res.status(200).json({ success: true, message: "Email sent successfully", messageId: info.messageId });

  } catch (err) {
    console.log("ERROR 👉", err);
    return res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;