'use strict;'
const express = require("express");
const app =  express();
const bodyparser = require('body-parser');


const db = require("./models/index.js")

var fizzBuzzRoutes = require('./routes/fizzbuzz')
const router = express.Router();
var cors = require("cors")

app.use(bodyparser.json())
app.use('/api',router);
fizzBuzzRoutes(router);
app.use(cors({origin: '*'}))

const appPort = process.env.PORT ? process.env.PORT :4000 
const server = app.listen(appPort, ()=>{
	console.log("listening to port", appPort, " !!");
})

module.exports = server;

