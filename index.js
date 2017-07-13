// https://github.com/heroku/node-js-getting-started/blob/master/index.js
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

const words = require('./words');

app.get('/level/:level/', (req, res) => {
  const index = parseInt(req.params.level, 10) - 1;
  const wordObj = words[index];
  if (typeof wordObj === 'undefined') {
    res.json({error: `Level [${index+1}] does not exist`});
  } else {
    res.json(wordObj);
  }
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});