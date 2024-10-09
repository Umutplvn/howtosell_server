const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'howtosell.leads@gmail.com', 
    pass: process.env.pass 
  }
});


const sendVerificationEmail = (email, passcode, name) => {
  const mailOptions = {
    from: 'howtosell.leads@gmail.com',
    to: email,
    subject: 'Email Verification',
    html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px;">
    <p style="margin-bottom: 15px; font-size: 16px;">Hello ${name},</p>
    <p style="margin-bottom: 15px; font-size: 16px;">Thank you for registering with How To Sell! As the final step to complete your registration process, please find your passcode below:</p>
    <p style="padding: 10px">
        <strong style="color: #3A7ECC; font-weight: bold; font-size: 16px;">Passcode: ${passcode}</strong>
    </p>
    <p style="font-size: 16px;">If you have any questions or need further assistance, feel free to reach out to us. We're here to help.</p>
    <p style="margin-top: 20px; font-size: 14px; color: #666; text-align: center;">Best regards,<br>How To Sell Team</p>
    <p style="font-size: 12px; color: #888; text-align: center; margin-top: 10px;">Dublin, Ireland</p>
</div>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendVerificationEmail;
