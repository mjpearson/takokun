<img src="public/tako_logo.png">

# Tako!

Tako is an express/koa middleware who's prime directive is simple -- deliver the best asset references to your front end applications as fast as possible.

Include Tako Client in your front-end application to auto discover your Apps source of UX/UI truthiness, analytics, asset CDN's and whatever else.

## But Why?

Tako's useful if you have a suite of many UI's with shared assets and your problem is trying to keep them in sync.  Out of the box, Tako uses file based configuration so that it plays nicely with change management processes (think peer reviewed pull requests), however Tako is pluggable so you can override configuration loading as you like as long as you return an object the config compiler understands.

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

### Constructor Options

* **cfgPath** {string} configuration file path
* **loader** {function} should return a Promise, on success this promise will resolve with an object meeting the format of the Config Spec
* **logger** {function(req, message, level)} custom logger

Either *cfgPath* or *loader* options must be provided, otherwise Tako will look for a configuration in its own installation base directory.


### Config Spec
