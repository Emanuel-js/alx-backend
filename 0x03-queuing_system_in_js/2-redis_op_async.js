import redis from 'redis';
const { promisify } = require('util');

const clt = redis.createClient();
const get = promisify(clt.get).bind(clt);


clt.on('connect', () => {
  console.log('Redis client connected to the server');
});
clt.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

function setNewSchool(schoolName, value) {
  clt.set(schoolName, value, redis.print);
}

async function displaySchoolValue(schoolName) {
  const name = await get(schoolName);
  console.log(name);
}

(async function main() {
  await displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
}());
