// if (false) {
let { age, setAge } = require('./a.cjs');
console.log('age 1: ', require.cache, age);
setAge(19);
Object.keys(require.cache).forEach(function (key) {
  delete require.cache[key];
});
console.log('age 2: ', require.cache, age);
age = 20;
console.log('===>>', age);
// }
