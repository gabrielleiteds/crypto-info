jest.setTimeout(12000);

const request = require("supertest");
const app = require("../src/app");

process.env.API_EXTERNAL = "https://www.mercadobitcoin.net/api";

describe("test routes E2E", () => {
  it("retrieve bitcoin information from the last few hours", async () => {
    const response = await request(app).get("/getInfo").query({
      crypto: "BTC",
    });

    expect(response.statusCode).toBe(200);
  });

  it("retrieve bitcoin information from a date", async () => {
    const response = await request(app).get("/getInfoFromDate").query({
      crypto: "BTC",
      date: "10/10/22",
    });

    expect(response.statusCode).toBe(200);
  });
});
