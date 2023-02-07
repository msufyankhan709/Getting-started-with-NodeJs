const _ = require("lodash");

const items = [1, 2, 3, 4];
const items2 = [1, [2, [3, [4]]]];

const newItems2 = _.flattenDeep(items2);

console.log(newItems2);
