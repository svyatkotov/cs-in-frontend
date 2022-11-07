import { Structure } from "./structure";

const jackBlack = new Structure<string | number>(['name', 'lastName', 'age']);

jackBlack.set('name', 'Jack');
jackBlack.set('lastName', 'Black');
jackBlack.set('age', 53);

console.log(jackBlack.get('name')); // 'Jack'
console.log(jackBlack.get('lastName')); // 'Black'
console.log(jackBlack.get('age')); // '53'
console.log(jackBlack.get('bla')); // 'Exception'
