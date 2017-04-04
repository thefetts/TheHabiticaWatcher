const express = require('express');
const app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/webhook', (req, res, next) => {
  console.log(req.body);
  res.end();
});

app.get('/', (req, res, next) => {
  res.end();
});

app.listen(8080);
