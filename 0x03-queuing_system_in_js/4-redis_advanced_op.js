import redis from 'redis';

const clt = redis.createClient();

function hset_func() {
  const hschools = {
    Portland: 50,
    Seattle: 80,
    New York: 20,
    Bogota: 20,
    Cali: 40,
    Paris: 2,
  };

  for (const val in hscools) {
    clt.hset('HolbertonSchools', val, hscools[val], redis.print);
  }

  const all_schools = clt.hgetall('HolbertonSchools');
  conslole.log(all_schools);
}

hset_func();
