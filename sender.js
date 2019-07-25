const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const sender = process.env.TWILIO_SENDER;


client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: sender,
     to: '+919489408090'
   })
  .then(message => console.log(message.sid));
