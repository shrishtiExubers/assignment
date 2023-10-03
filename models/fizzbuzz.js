
const mongoose = require("mongoose");

const fizzBuzzSchema = new mongoose.Schema({
  number: {
    type: String, required: true
  },
  result:{type:Array, required:true},
  createdAt:{type:Date, required:true, default:new Date()},
  password:{type:String, required:false}
  
})

const fizzbuzzModel = mongoose.model("fizzbuzz", fizzBuzzSchema) // creating the model from the schema

module.exports = fizzbuzzModel // exporting the model