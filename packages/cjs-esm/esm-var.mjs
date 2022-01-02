// import path from 'path';

// // console.log('dirname', __dirname);
// // console.log('filename', __filename);
// console.log('this', this);
// console.log('import', import.meta, import.meta.url);
// console.log('dirname', path.dirname(import.meta.url));
// console.log('filename', path.extname(import.meta.url));

import filedirname from 'filedirname';
import { createRequire } from 'module';

const [filename, dirname] = filedirname(import.meta.url);
console.log('filename: ', filename, dirname);

const require = createRequire(import.meta.url);
console.log('require: ', require);
const { add } = require('./util-name-export.cjs');
console.log('add: ', add(1, 2));
