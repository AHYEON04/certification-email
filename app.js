const twilio = require('twilio');
const app = require('express')();
const bodyParser = require('body-parser');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const MessagingResponse = require('twilio').twiml.MessagingResponse;
    
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });
app.use(bodyParser.urlencoded({ extended: false }));
    
app.post('/voice', twilio.webhook(), (req, res) => {
    // Twilio Voice URL - receives incoming calls from Twilio
    const response = new VoiceResponse();
    
    response.say(
        `Thanks for calling!
         Your phone number is ${req.body.From}. I got your call because of Twilio´s
         webhook. Goodbye!`
    );
    
      res.set('Content-Type', 'text/xml');
      res.send(response.toString());
    });
    
app.post('/message', twilio.webhook(), (req, res) => {
    // Twilio Messaging URL - receives incoming messages from Twilio
    const response = new MessagingResponse();
    
    response.message(`Your text to me was ${req.body.Body.length} characters long.Webhooks are neat :)`);
    
      res.set('Content-Type', 'text/xml');
      res.send(response.toString());
    });
    

app.listen(PORT, () => {
  console.log(PORT, '번 포트에서 대기 중');
});