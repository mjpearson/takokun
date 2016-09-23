var express = require('express');
var app = express();

var Tako = require('../index.js');
const takokun = new Tako({
  cfgPath : '../test/tako.json'
});

takokun.init().then(function() {
  console.log('promise resolved?', 'router', takokun, takokun.route)
  app.use('/assets', takokun.routeDefault);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
