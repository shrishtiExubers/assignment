"use strict;";

const fizzbuzzModel = require("../models/fizzbuzz");
const validator = require("validator");

const saveFizzBuzzResult = async (req, res, next) => {
  try {
	console.log("req===============", req)
    var noPassed = req.body.number;

    //validate for valid json
    const isValid = await validator.isJSON(JSON.stringify(req.body));
    if (!isValid) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    }

    //check whether that number is available or not
    const getResult = await fizzbuzzModel.find({ number: noPassed });
    if (getResult.length) {
      return res.status(400).json({
        Success: true,
        message: "Entered Number data already existed",
        data: getResult,
      });
    } else {
      const result = await fizzBuzz(req.body.number);
      let saveData = { number: noPassed, result };
      const createdData = await fizzbuzzModel.create(saveData);
      return res.status(200).json({
        Success: true,
        message: "Successfully Created",
        data: createdData,
      });
    }
  } catch (err) {
    console.log("err", err);
    return res
      .status(400)
      .json({
        Success: false,
        message: "Error while creating data",
        error: err,
      });
  }
};

const fizzBuzz = (n) => {
  let result = [];

  for (let i = 1; i <= n; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
};
module.exports = {
  saveFizzBuzzResult,
};
