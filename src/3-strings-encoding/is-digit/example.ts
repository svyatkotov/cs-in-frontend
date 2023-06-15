import { isDigit } from "./is-digit";

console.log(isDigit('123'));    // true
console.log(isDigit('Ⅻ'));     // true
console.log(isDigit('Ⅻ123'));  // false
console.log(isDigit('Ⅻabc'));  // false
console.log(isDigit('foo'));    // false
