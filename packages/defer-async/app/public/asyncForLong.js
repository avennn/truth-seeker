let now = Date.now();
console.log('async start', now);
while (Date.now() - now < 500) {
  // sleep 500ms
}
const end = Date.now();
console.log('async', end, end - now);
