const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + "/build"));
app.use(bodyParser.json());
app.listen(process.env.PORT || 8080);
app.post('/send-message', (req, res) => {
  const {email, name, subject, message} = req.body;
  const separator = '\n* * * * * * *\n';
  const sendMessage = `${separator}From: ${name}(${email})\nSubject: ${subject}\nMessage: ${message}${separator}`;
  fs.appendFile('message.txt', sendMessage, function (err) {
    if (err) {
      res.status(500).send({send: false});
      throw err;
    }
    res.send({send: true});
  });
})
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"))
});

console.log("Listening");