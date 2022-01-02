// const { add } = require('./util-name-export.mjs');
// const add = require('./util-default-export.mjs');
// console.log('add: ', add);

import('./util-default-export.mjs').then(
  ({ default: add }) => {
    console.log('default import: ', add(1, 2));
  },
  (e) => {
    console.error(e);
  }
);

import('./util-name-export.mjs').then(
  ({ add }) => {
    console.log('name import: ', add(1, 2));
  },
  (e) => {
    console.error(e);
  }
);
