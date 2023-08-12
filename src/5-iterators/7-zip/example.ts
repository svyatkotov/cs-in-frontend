import { zip } from "./zip";

console.log([...zip<any>([1, 2], new Set([3, 4]), 'bl')]);          // [[1, 3, b], [2, 4, 'l']]
console.log([...zip<any>([1, 2], new Set([3, 4, 5]), 'blac')]);     // [[1, 3, b], [2, 4, 'l']]
console.log([...zip<any>([1, 2, 3, 4], new Set([3, 4, 5]), 'b')]);  // [[1, 3, b]]
console.log([...zip<any>()]);                                       // []
