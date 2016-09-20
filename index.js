var express = require('express');
var app = express();

var Tako = require('./lib/middleware/takokun.js');

app.use('/assets', new Tako({
  cfgPath : './test/tako.json'
}));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
