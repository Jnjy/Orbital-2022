var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'commflea@gmail.com',
      pass: 'oevhplvuibipduzy'
    }
  });
  
  var mailOptions = {
    from: 'commflea@gmail.com',
    to: 'commflea@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'test'
  };
  
export function sendRequestMail() {
    return transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                } else {
                console.log('Email sent: ' + info.response);
                }
            });
}
