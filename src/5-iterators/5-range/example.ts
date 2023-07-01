import { SymbolRange } from "./range";

const range = new SymbolRange('a', 'f');
console.log(Array.from(range));             // ['a', 'b', 'c', 'd', 'e', 'f']

const range1 = new SymbolRange(-5, 1);
console.log(Array.from(range1.reverse()));  // [1, 0, -1, -2, -3, -4, -5]

const range2 = new SymbolRange(1, 1);
console.log(Array.from(range2));            // [1]

const range3 = new SymbolRange('a', 'a');
console.log(Array.from(range3.reverse()));  // ['a']

const range4 = new SymbolRange(3, 1);
console.log(Array.from(range4));            // [3, 2, 1]

const range5 = new SymbolRange('c', 'a');
console.log(Array.from(range5.reverse()));  // ['a', 'b', 'c']
