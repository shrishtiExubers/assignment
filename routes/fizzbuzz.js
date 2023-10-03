var user = require('../controllers/fizzbuzz');

module.exports = (router) => {
    router.post('/fizzbuzz', user.saveFizzBuzzResult);

}