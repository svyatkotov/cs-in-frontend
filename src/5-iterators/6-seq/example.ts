import { seq } from "./seq";

console.log([...seq<any>([1, 2], '', new Set([3, 4]), 'bla', [])]);  // [1, 2, 3, 4, 'b', 'l', 'a']
console.log([...seq<any>('bla')]);                                   // ['b', 'l', 'a']
console.log([...seq<any>()]);                                        // []
