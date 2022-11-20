var express = require('express');
var router = express.Router();

const {redisClient} = require('./../config/redis')
const redis = redisClient.v4;

/**
 * 데이터 가져오기
 */
router.get('/', async (req, res) => {
  const result = await redis.get("test")

  res.json(result)
});

/**
 * 데이터 저장하기
 */
router.post('/', async (req, res) => {
  redis.set("test", "Hi")

  res.json("등록완료")
});

module.exports = router;
