let now = Date.now();
console.time('defer start');
while (Date.now() - now < 500) {
  // sleep 500ms
}
const end = Date.now();
console.timeEnd('defer');
