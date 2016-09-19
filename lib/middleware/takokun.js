var fs = require('fs'),
  path = require('path'),
  crypt = require('bcrypt');

/*
 *
 * @param {object} options
 * @param {string} options.cfgPath (optional) tako.json config file path
 * @param {function} options.loader (optional) config loader (function())
 * @param {function} options.logger (optional) request logger  (function(req))
 *
 */
function TakoKun(options) {
  this.options = options;
  self = this;

  this.assets = {};

  if (options.loader) {
    this.loader = options.loader;
  }
  this.loader();

  if (options.logger) {
    this.logger = options.logger;
  }

  return function _takoKun(req, res, next) {
    res.send(self.assets);
    self.log(req);
  }
}

TakoKun.prototype = {
  /*
   * @todo return promise
   */
  loader : function() {
    console.log(__dirname, this.options);
    this.assets = JSON.parse(
      fs.readFileSync(
        this.options.cfgPath || path.resolve(__dirname + '../../../tako.json')
      )
    );
  },
  /* Event logger
   *
   *
   */
  log : function(req) {
    console.log(req.headers);
  }
}

module.exports = TakoKun;
