<img style="display: block; margin-left: auto; margin-right: auto" src="public/tako_logo.png">

# Tako!

Tako is an express/koa middleware who's prime directive is simple -- deliver the best asset references to your front end applications as fast as possible.

Include Tako Client in your front-end application to auto discover your Apps source of UX/UI truthiness, analytics, asset CDN's and whatever else.

### Usage

```
var express = require('express');
var app = express();

var TakoKun = require('takokun');
const tako = new TakoKun({
  cfgPath : 'config/tako.json'
});

tako.init().then(function() {
  app.use('/assets', tako.routeDefault);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

### Config
