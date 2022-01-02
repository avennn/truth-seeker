// node 14
// default import
import add from './util-default-export.cjs';
// name import
import { add as namedAdd } from './util-name-export.cjs';
// namespace import
import * as _ from './util-name-export.cjs';

console.log('add1: ', add(1, 2));
console.log('add2: ', namedAdd(1, 2));
console.log('add3: ', _.add(1, 2));

console.log('meta: ', this);
