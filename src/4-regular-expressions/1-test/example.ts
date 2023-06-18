import { myRegExp } from "./test";

console.log(myRegExp.test('привет'));           // false
console.log(myRegExp.test('hello мир'));        // false
console.log(myRegExp.test('$hello_world123'));  // true
