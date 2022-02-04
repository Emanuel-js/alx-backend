import redis from 'redis';

const clt = redis.createClient();

clt.on('connect', () => {
  console.log('Redis client connected to the server');
});
clt.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

function setNewSchool(schoolName, value) {
  clt.set(schoolName, value, redis.print);
}

function displaySchoolValue(schoolName) {
  const name = clt.get(schoolName, redis.print);
  console.log(name);
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
