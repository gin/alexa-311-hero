const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

const options = {
  auth: {
    api_user: 'USERNAME', // 'SENDGRID_USERNAME' - Recommended to store as evn variables
    api_key: 'SUPER_SECRET_PW', // 'SENDGRID_PASSWORD'
  }
};

const mailer = nodemailer.createTransport(sgTransport(options));

const content = `Please pick up 1 sofa from 123 LaLa St, Los Angeles this Friday at 3pm. Thanks.`
const email = {
  to: 'luigileung@gmail.com',
  //to: '311@lacity.org',
  from: 'alexa311hero@gmail.com',
  subject: 'Pickup request',
  text: content,
  html: content,
};

function main() {
  mailer.sendMail(email, function(err, res) {
    if (err) {
      console.log(err)
    }
    console.log(res);
  });
}

main();
