import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { add } = require('./util-name-export.cjs');

console.log(add(1, 2), require); // 3
