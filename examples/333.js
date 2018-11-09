const ICAScrambo = require('../dist/ICAScrambo').ICAScrambo;
const threebythree = new ICAScrambo(); // Defaults to 3x3
threebythree.setType('333').get(5).forEach((v, i) => {
  console.log(i,v);
});