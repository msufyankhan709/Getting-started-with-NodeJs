const os = require("os");

// user Info

const user = os.userInfo();

console.log(user);

const currentOS = {
  name: os.type(),
  release: os.release(),
  memory: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
