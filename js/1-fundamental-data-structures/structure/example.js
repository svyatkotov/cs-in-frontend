"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structure_1 = require("./structure");
const jackBlack = new structure_1.Structure(['name', 'lastName', 'age']);
jackBlack.set('name', 'Jack');
jackBlack.set('lastName', 'Black');
jackBlack.set('age', 53);
console.log(jackBlack.get('name')); // 'Jack'
console.log(jackBlack.get('lastName')); // 'Black'
console.log(jackBlack.get('age')); // '53'
console.log(jackBlack.get('bla')); // 'Exception'
