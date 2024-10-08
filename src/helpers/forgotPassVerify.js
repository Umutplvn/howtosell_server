const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'howtosell.leads@gmail.com', 
    pass: process.env.pass 
  }
});

const fotgotPassVerify = ({email, name, userId}) => {
  const mailOptions = {
    from: 'howtosell.leads@gmail.com',
    to: email,
    subject: 'Reset Password',
    html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px; border: 1px solid #ced4da;">
    <p style="margin-bottom: 15px; font-size: 16px;">Hello ${name},</p>
    <p style="margin-bottom: 15px; font-size: 16px;">We have received a request to reset your password for your How To Sell account.    </p>
    <p style="margin-bottom: 15px; font-size: 16px;">If you did not make this request, simply ignore and delete this email.
    </p>
    <p style="background-color: #f4f4f4; padding: 10px">
    <a href="http://127.0.0.1:3000/reset-password/${userId}" style="color: #3C9387; font-weight: bold; font-size: 16px;">Click here to reset your password</a>
</p>
    <p style="font-size: 16px;">If you have any questions or need further assistance, feel free to reach out to us. We're here to help.</p>
    <p style="margin-top: 20px; font-size: 14px; color: #666; text-align: center;">Warm regards,<br>How To Sell Team</p>
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

module.exports = fotgotPassVerify;
