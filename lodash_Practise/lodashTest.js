var ld = require ("lodash");
var alphabet = ["a","b","c","d","e","f"];
var number = [1,2,3,4,5,6,7];


console.log(ld.chunk(alphabet, 3));
console.log(ld.chunk(number, 2));
console.log(ld.initial(alphabet));
