const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'umutpehlivan2078@gmail.com', 
    pass: process.env.pass 
  }
});

const sendEmail = (email, name, age, lastname, phone, instagram, occupation, descOfJob, income, goal, obstacles, directInvest) => {
  const mailOptions = {
    from: 'umutpehlivan2078@gmail.com',
    to: "umutpehlivan2078@gmail.com",
    subject: 'New Customer Form Submission',
    html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px; border: 1px solid #ced4da;">
    <p style="margin-bottom: 15px; font-size: 16px;">Hello Babar,</p>
    <p style="margin-bottom: 15px; font-size: 16px;">There is a potential client for you! You can see the details of the client below.</p>
    <p style="background-color: #f4f4f4; padding: 10px">
        <strong style="color: #3C9387; font-weight: bold; font-size: 16px;">User Details: ${email}, ${name}, ${age, lastname, phone, instagram, occupation, descOfJob, income, goal, obstacles, directInvest}</strong>
    </p>
    <p style="font-size: 16px;">Good Luck!</p>
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

module.exports = sendEmail;
