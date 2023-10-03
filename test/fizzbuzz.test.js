const { saveFizzBuzzResult } = require("../controllers/fizzbuzz");

const { expect } = require("chai");
const FizzBuzz = require("../models/fizzbuzz");
const sinon = require("sinon");

describe("fizzbuzz Unit Tests", function () {
  this.afterEach(() => {
    sinon.restore();
  });
  describe("Save fizzbuzz result functionality", function () {
    it("should successfully add a fizzbuzz if the number  in the DB  is not present", async function () {
      const obj = {number:5};
      const result = ["1", "2", "Fizz", "4", "Buzz", "Fizz"];
      sinon.stub(FizzBuzz, "countDocuments").returns(0);
      sinon
        .stub(FizzBuzz.prototype, "save")
        .returns({ number, result });
      const returnedFizzBuzz = await saveFizzBuzzResult({body:obj});
      console.log("returnedFizzBuzz", returnedFizzBuzz)
      expect(returnedFizzBuzz.result).to.equal(result);
    });
    // it("should throw an error if the number of users with the same profileId is not zero", async function () {
    //   const profileId = 1;
    //   const name = "Akshay";
    //   const dob = "2020-12-12";
    //   const experience = [{ years: 2, organizationName: "ABCD" }];
    //   sinon.stub(User, "countDocuments").returns(1);
    //   await saveUser({
    //     profileId,
    //     name,
    //     dob,
    //     experience,
    //   }).catch((error) => {
    //     expect(error.message).to.equal("User with profileId already exists");
    //   });
    // });
  });
});
