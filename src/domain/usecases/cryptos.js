const fetch = require("node-fetch");

const { Cryptos } = require("../interfaces");

class CryptoUseCase extends Cryptos {
  constructor() {
    super();
  }

  async getInfoFromDate(crypto, date) {
    if (!crypto || !date) throw new Error("crypto or date not send");
    const response = await fetch(
      `${process.env.API_EXTERNAL}/${crypto}/day-summary/${date}`
    );

    return response;
  }

  async getResumFromTheLast24Hours(crypto) {
    if (!crypto) throw new Error("crypto does not send");

    const response = await fetch(
      `${process.env.API_EXTERNAL}/${crypto}/ticker`
    );

    if (response.status === 200) {
      const res = await response.json();

      return res;
    }
  }
}

module.exports = CryptoUseCase;
