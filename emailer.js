/**
 * Emailer
 *
 * If using Gmail for sending emails, temporarily turn on "Less secure apps".
 * https://www.google.com/settings/security/lesssecureapps
 *
 * To run, install npm and nodejs.
 * Then,
 *   `$ npm install nodemailer`
 *   `$ EMAIL_PW=SUPER_SECRET_PASSWORD node emailer.js`
 */
const botEmail = 'alexa311hero@gmail.com';
const botPassword = 'SUPER_SECRET_PW';  // hardcode for demo
//const botPassword = process.env.EMAIL_PW;
//console.log(process.env.EMAIL_PW);

const LA311ServiceEmail = 'luigileung@gmail.com';
//const LA311ServiceEmail = '311@lacity.org';

const location = '1 La La St, Los Angeles';
const schedule = 'this Friday';
const emailContent = `Please pick up a sofa at ${location} on ${schedule}`;


const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: botEmail,
        pass: botPassword,
    }
});

function main() {
  transporter.sendMail(mailOptions(botEmail, LA311ServiceEmail), (error, info) => {
      if (error) { return console.log(`Error: ${error}`); }
      console.log('Message sent: ' + info.response);
      //console.log('Message sent: %s', info.messageId);
  });
}

function mailOptions(sender, receiver) {
    return {
        from: `311 Hero <${sender}>`,
        to: receiver,
        subject: 'Pick up request',
        text: `${emailContent}`
    };
}

main();
