var express = require('express');
var router = express.Router();

const redis = require('./../config/redis')
const redisClient = redis.v4;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
