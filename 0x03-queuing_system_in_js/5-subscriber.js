import redis from 'redis';

const clt = redis.createClient();

clt.on('connect', () => {
  console.log('Redis client connected to the server');
});
clt.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
}); 

clt.subscribe('holberton school channel');

clt.on('message', (channel, message) => {
  console.log(message);

  if (message === 'KILL_SERVER') {
    clt.unsubscribe(channel);
    clt.quit();
  }
});
