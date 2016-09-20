var fs = require('fs'),
  path = require('path'),
  crypto = require('crypto');

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
  this.assetsCompiled = {
    tags : {},
    application_name : '',
    detect_changes : false,
    hash : ''
  };

  if (options.loader) {
    this.loader = options.loader;
  }

  this.loader().then(
    function() {

      self.compile();
    },
    function(err) {
      self.log(err);
    }
  );

  if (options.logger) {
    this.logger = options.logger;
  }

  return function _takoKun(req, res, next) {
    res.send(self.assetsCompiled);
    self.log(req);
  }
}

TakoKun.prototype = {

  loader : function() {
    var self = this;

    return new Promise(function(resolve, reject) {
      fs.readFile(
        self.options.cfgPath || path.resolve(__dirname + '../../../tako.json'),
        function(err, buf) {
          if (err) {
            reject(err);
          } else {
            self.assets = JSON.parse(buf.toString());
            resolve(self.assets);
          }
        }
      );
    });
  },

  /*
   * Event logger
   *
   */
  log : function(req) {
    console.log(
      this.assetsCompiled.application_name,
      this.assetsCompiled.hash,
      req.headers
    );
  },

  /*
   * Compiles a tag object into its DOM injectable string
   */
  _compileTag : function(tagName, attributes) {
    var str = `<${tagName} `;

    for (var attr in attributes) {
      str += `${attr}="${attributes[attr]}"`;
    }

    return str + `></${tagName}>`;
  },

  /*
   * Compiles 'tags' directives into injectable tag strings
   */
  compile : function() {
    if (!this.assets.application_name) {
      throw new Error('Missing config attribte [application_name]');
    }

    var compiled = this.assetsCompiled.tags;
    if (this.assets.tags) {
      for (var zone in this.assets.tags) {
        compiled[zone] = {};
        for (var tag in this.assets.tags[zone]) {
          compiled[zone][tag] = [];

          for (var i = 0; i < this.assets.tags[zone][tag].length; i++) {
            compiled[zone][tag].push(
              this._compileTag(tag, this.assets.tags[zone][tag][i])
            );
          }
        }
      }
    }

    this.assetsCompiled.application_name = this.assets.application_name;
    this.assetsCompiled.detect_changes = this.assets.detect_changes || false;
    this.assetsCompiled.hash = crypto.createHash(
      'md5'
    )
    .update(
      JSON.stringify(this.assetsCompiled)
    )
    .digest("hex");
  }
}

module.exports = TakoKun;
