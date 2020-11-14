async function test() {
  const Redis = require('ioredis');

  const redis = new Redis({
    port: 6379, // Redis port
    // host: "127.0.0.1", // Redis host
    // family: 4, // 4 (IPv4) or 6 (IPv6)
    password: "123456",
    // db: 0,
  });
  await redis.set('a', 1);
  await redis.setex('b', 5, 10);
  const keys = await redis.keys("*")
  console.log(await redis.get('b'));
  setTimeout(async () => {
    console.log(await redis.get('b'))
  }, 6000)
}

test();
