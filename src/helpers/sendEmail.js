const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'howtosell.leads@gmail.com',
    pass: process.env.pass 
  }
});

const sendEmail = (email, name, age, lastname, phone, instagram, occupation, descOfJob, income, goal, obstacles, directInvest) => {
  const mailOptions = {
    from: 'howtosell.leads@gmail.com',
    to: "howtosell.leads@gmail.com",
    subject: 'New Customer Form Submission',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px;">
        <p style="margin-bottom: 15px; font-size: 16px;">Hello Babar,</p>
        <p style="margin-bottom: 15px; font-size: 16px;">  There is a potential client for you! Please find their details below.</p>

        ${age ? `<p style="margin-bottom: 10px; font-size: 16px;"><strong>• How old are you?</strong><br>${age}</p>` : ''}

        ${name ? `<p style="margin-bottom: 10px; font-size: 16px;"><strong>• What is your First Name?</strong><br>${name}</p>` : ''}
        ${lastname ? `<p style="margin-bottom: 10px; font-size: 16px;"><strong>• What is your Last Name, ${name}?</strong><br>${lastname}</p>` : ''}

        ${email ? `<p style="margin-bottom: 10px; font-size: 16px;"><strong>• What's your best email, ${name}?</strong><br>${email}</p>` : ''}
        ${phone ? `<p style="margin-bottom: 10px; font-size: 16px;"><strong>• What is your WhatsApp Number, ${name}?</strong><br>${phone}</p>` : ''}
        ${instagram ? `<p style="margin-bottom: 10px; font-size: 16px;"><strong>• What is your Instagram username, ${name}?</strong><br>${instagram}</p>` : ''}

        ${occupation ? `<p style="margin-bottom: 10px; font-size: 16px;"><strong>• What's your current occupation, ${name}?</strong><br>${occupation}</p>` : ''}
        ${descOfJob ? `<p style="margin-bottom: 10px; font-size: 16px;"><strong>• ${name}, please let us know a little bit about what exactly you do for a living?</strong><br>${descOfJob}</p>` : ''}

        

        ${income ? `<p style="margin-bottom: 10px; font-size: 16px;"><strong>• What's your yearly income? (in USD)</strong><br>${income}</p>` : ''}

        ${goal ? `<p style="margin-bottom: 10px; font-size: 16px;"><strong>• What are your goals for sales and your business, ${name}? <br/> How much would you like to earn per year within the next 12 months?
        </strong><br>${goal}</p>` : ''}

        ${obstacles ? `<p style="margin-bottom: 10px; font-size: 16px;"><strong>• What are the biggest obstacles that keep you from achieving your goal, ${name}?</strong><br>${obstacles}</p>` : ''}
        ${directInvest ? `<p style="margin-bottom: 10px; font-size: 16px;"><strong>• How much money could you directly invest in achieving these goals, if you are 100% certain that you achieve them?</strong><br>${directInvest}</p>` : ''}

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
