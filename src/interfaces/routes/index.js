const { Router } = require("express");
const CryptoController = require("../controllers/cryptos");

const routes = Router();
const cryptoController = new CryptoController();

routes.get("/getInfoFromDate", cryptoController.getInfoFromDate);
routes.get("/getInfo", cryptoController.getResumFromTheLast24Hours);

module.exports = routes;
