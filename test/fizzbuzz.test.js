const { saveFizzBuzzResult, fizzBuzz } = require("../controllers/fizzbuzz");
const request = require("supertest");
const assert = require("assert");

const app = require("../server");

describe("fizzbuzz Unit Tests", function () {
  describe("Save fizzbuzz result functionality", function () {
    it("should successfully add a fizzbuzz if the number  in the DB  is not present", async function () {
      const mockResult = [
        "1",
        "2",
        "fizz",
        "4",
        "buzz",
        "fizz",
        "7",
        "8",
        "fizz",
        "buzz",
      ];

      const res = await request(app)
        .post("/api/fizzbuzz")
        .send({ number: 10 })
        .set("Accept", "application/json");
      expect(res.statusCode).toEqual(200);
      expect(res.body.data.result).toEqual(mockResult);
    });

    it("should give error if number is not present in payload", async function () {
      const res = await request(app)
        .post("/api/fizzbuzz")
        .send({ test: 10 })
        .set("Accept", "application/json");
      expect(res.statusCode).toEqual(400);
    });

    it.only("should give error if it is invalid json", async function () {
      const res = await request(app)
        .post("/api/fizzbuzz")
        .send( 'test')
        .set("Accept", "application/json");
      expect(res.statusCode).toEqual(412);
    });
  });

  it("fizzBuzz function give the result of given number", async () => {
    const mockResult = [
      "1",
      "2",
      "fizz",
      "4",
      "buzz",
      "fizz",
      "7",
      "8",
      "fizz",
      "buzz",
    ];
    const result = await fizzBuzz(10);
    expect(result).toEqual(mockResult);
  });
});
