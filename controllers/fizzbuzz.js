"use strict;";

const fizzbuzzModel = require("../models/fizzbuzz");
const validator = require("validator");
const { FIZZ, FIZZBUZZ, BUZZ } = require("../config/constants");
console.log(FIZZ, FIZZBUZZ, BUZZ);

const saveFizzBuzzResult = async (req, res, next) => {
  try {
    var noPassed = req?.body?.number;
    //validate for valid json
    const isValid = await validator.isJSON(JSON.stringify(req.body)) && Object.keys(req.body).length >0;
    if (!isValid) {
      return res.status(412).send({
        success: false,
        message: "Validation failed"
      });
    }
    //check whether that number is available or not
    if (noPassed) {
      const getResult = await fizzbuzzModel.find({ number: noPassed });
      if ( getResult.length) {
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
          fizzbuzz: createdData.result,
        });
      }
    } else {
      return res.status(400).json({
        Success: true,
        message: "Invalid Payload number is required",
      });
    }
  } catch (err) {
    console.log("err", err);
    return res.status(400).json({
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
      result.push(FIZZBUZZ);
    } else if (i % 3 === 0) {
      result.push(FIZZ);
    } else if (i % 5 === 0) {
      result.push(BUZZ);
    } else {
      result.push(i.toString());
    }
  }
  return result;
};
module.exports = {
  saveFizzBuzzResult,
  fizzBuzz,
};
