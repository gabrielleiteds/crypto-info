const { CryptoUseCase } = require("../../domain/usecases");

const cryptoUseCase = new CryptoUseCase();

class CryptoController {
  async getInfoFromDate(req, res) {
    const { crypto, date } = req.query;

    const response = await cryptoUseCase.getInfoFromDate(crypto, date);

    return res.status(200).json(response);
  }

  async getResumFromTheLast24Hours(req, res) {
    const { crypto } = req.query;

    const response = await cryptoUseCase.getResumFromTheLast24Hours(crypto);

    return res.status(200).json(response);
  }
}

module.exports = CryptoController;
