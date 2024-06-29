const { log } = require("console");
const os = require("os");
const user = os.userInfo();

//info about the current user
console.log(user);

//show os uptime
console.log(`The system, uptime is ${os.uptime()} seconds`);

//show os details
const currentOs = {
  name: os.type(),
  release: os.release(),
  freemem: os.freemem(),
  totalmeme: os.totalmem(),
};

console.log(currentOs);
