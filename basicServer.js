const express = require('express');
const app = express();
const os = require('os');

const computerName = os.hostname();

app.get('/', function (req, res) {
    res.send(`${computerName} Hello World`)
  });
   
  app.listen(5544);