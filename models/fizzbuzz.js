
const mongoose = require("mongoose");

const fizzBuzzSchema = new mongoose.Schema({
  number: {
    type: String, required: true
  },
  result:{type:Array, required:true},
  createdAt:{type:Date, required:true, default:new Date()}
  
})

const fizzbuzzModel = mongoose.model("fizzbuzz", fizzBuzzSchema) // creating the model from the schema

module.exports = fizzbuzzModel // exporting the model