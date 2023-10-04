const mongoose = require("mongoose");
const {
	DB_USER,
	DB_PASSWORD,
	DB_HOST,
	DB_PORT,
	DB_NAME,
  } = process.env;
  
const db_url =  `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin` || 'mongodb://localhost/fizzBuzz_DB';
console
mongoose.connect(db_url, {
	keepAlive: true,
  	useNewUrlParser: true,
  	useUnifiedTopology: true
})

mongoose.set("debug", true) 
mongoose.Promise = Promise;

module.exports.fizzbuzz = require("./fizzbuzz")
