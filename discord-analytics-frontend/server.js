const express = require('express');
const path = require('path');
var fs = require('fs');

const port = 80;
const app = express();

app.get('/data/list', function(req, res) {
  const folder = path.join(__dirname + '/website/data');
  var file_list = [];

  fs.readdirSync(folder).forEach(file => {
    if (file.includes('.json')) file_list.push(file);
  });

  res.send(file_list);
});

app.use('/js', express.static(path.join(__dirname, '/website/js')));
app.use('/css', express.static(path.join(__dirname, '/website/css')));
app.use('/media', express.static(path.join(__dirname, '/website/media')));
app.use('/data', express.static(path.join(__dirname, '/website/data')));

app.use(function(req, res, next) {
  if (req.url.includes('/discord-analytics')) {
    req.url = '/';
  }
  next();
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/website/index.html'));
});

app.listen(port, () =>
  console.log(`<discord_analytics_frontend> listening on port ${port}!`)
);
