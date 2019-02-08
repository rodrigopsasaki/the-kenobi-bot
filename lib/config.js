"use strict";
const dotenv = require('dotenv');
// Load root package.json
const pkg = require(process.cwd() + '/package.json');
// Hardcode some defaults
const defaults = {

};

class Config {
  constructor() {
    dotenv.load();
    this.env = Object.assign(process.env, defaults);

    let self = this;
    return new Proxy(this, {
      get(target, prop) {
        if (!(prop in target)) {
          return self.env[prop] || undefined;
        }

        return target[prop] || undefined;
      }
    });
  }
};

module.exports = new Config().env;
