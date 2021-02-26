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

app.use("/", routes);

app.listen(PORT, () => {
  console.log(PORT, '번 포트에서 대기 중');
});