In Node and the framework of your choice, create an API endpoint call that takes a JSON object in the following structure:

{'number': 7}

This API validates the JSON, and returns a FizzBuzz (https://en.wikipedia.org/wiki/Fizz_buzz) result for that number. For example, if we posted the above JSON to the endpoint, the result would be:

{'fizzBuzz': '1, 2, Fizz, 4, Buzz, Fizz, 7'}

Create a database table where we store both the number we passed in, and also the FizzBuzz result each time we post to the API. Use migrations for this
Write tests to test the endpoint, as well as testing the logic for your FizzBuzz code, and checking the data is saved to the database successfully
Document the API
Bonus (not required, but gets bonus points): set up this endpoint using docker-compose so I can install it and run it locally.# chicken_box"# assignment" 
