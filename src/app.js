const bodyParser = require("body-parser");
const express = require("express");
const routes = require("./interfaces/routes");

class App {
  constructor() {
    this.Express = express();

    this.routes();
  }

  async middlewares() {
    this.Express.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    this.Express.use(bodyParser.json());
  }

  async routes() {
    this.Express.use(routes);
  }
}

module.exports = new App().Express;
