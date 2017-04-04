// Habitica stuff
const Habitica = require('habitica');
const habitica = new Habitica({
  id: 'ba64b1af-4cab-4e78-9a7a-f187c19e33da',
  apiToken: '5219ca15-ca8f-41fe-a1c2-5d1b7b385ec8'
});

// habitica.post('/user/webhook', {url:'https://the-habitica-watcher.herokuapp.com/webhook', label: 'test hook'}).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

let userName = '';
habitica.get('/user').then(res => {
  userName = res.data.profile.name;
  console.log(userName);
});


// Express stuff
const express = require('express');
const app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/webhook', (req, res, next) => {
  console.log('*********************************************');
  console.log(req.body.task);
  console.log('*********************************************');
  console.log(req.body.user);
  console.log('*********************************************');
  const task = req.body.task;
  if (task.type === 'todo' && task.completed) {
    console.log(`${task.text} completed by ${userName}!`);
  }
  res.end();
});

app.get('/', (req, res, next) => {
  res.end();
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on ${port}`)
});
