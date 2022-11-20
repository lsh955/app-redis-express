var express = require('express');
var router = express.Router();

const redis = require('./../config/redis')
const redisClient = redis.v4;

/**
 * 데이터 가져오기
 */
router.get('/', async (req, res) => {
  const result = await redisClient.get("test")

  res.json(result)
});

/**
 * 데이터 저장하기
 */
router.post('/', async (req, res) => {
  redisClient.set("test", "Hi")

  res.json("등록완료")
});

module.exports = router;
