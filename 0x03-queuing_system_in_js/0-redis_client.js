import redis from 'redis';

const clt = redis.createClient();

clt.on('connect', () => {
  console.log('Redis client connected to the server');
});
clt.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
}); 
