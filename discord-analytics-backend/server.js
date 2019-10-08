const express = require('express');
var bot = require('./bot.js');

const port = 80;
const app = express();

app.get(`/`, send_data);

app.listen(port, () =>
  console.log(`<discord_analytics_backend> listening on port ${port}!`)
);

async function send_data(request, response) {
  params = request.query;
  if (params.id === undefined) {
    response.status(409).send('Parameter <b>ID</b> hasnt been stated');
  } else {
    if (params.id.length != 18) {
      response.status(409).send('Wrong parameter <b>ID</b>');
    } else {
      res = await bot.getData(params.id);
      response.status(res[1]).send(res[0]);
    }
  }
}
