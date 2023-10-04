const mongoose = require("mongoose");
const db_url = process.env.MONGODB_URL || 'mongodb://localhost/fizzBuzz_DB';
console
mongoose.connect(db_url, {
	keepAlive: true,
  	useNewUrlParser: true,
  	useUnifiedTopology: true
})

mongoose.set("debug", true) 
mongoose.Promise = Promise;

module.exports.fizzbuzz = require("./fizzbuzz")
