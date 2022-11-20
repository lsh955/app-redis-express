const redis = require('redis');

// TODO : 추후 환경변수에 빼서 관리할 것.
const redisInfo = {
    host: 'localhost',
    port: 6379,
    db: 0,
    legacyMode: true
}

// Redis 연결
const redisClient = redis.createClient(redisInfo);

redisClient.on('connect', () => {
    console.info('Redis connected!');
});
redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});

redisClient.connect().then(); // redis v4 연결 (비동기)

module.exports = redisClient;