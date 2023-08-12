import { random } from "../1-random";
import { take } from "../2-take";
import { filter } from "./filter";

const randomInt = random(0, 100);

console.log([...take(filter(randomInt, (el) => el > 30), 15)]);
console.log([...filter(take(randomInt, 15), (el) => el > 30)]);
console.log([...filter(take(randomInt, 15), (el) => el > 100)]);           // []
console.log([...filter([1,2,3,4,5], (el) => el > 3)]);                    // [4,5]
console.log([...filter(new Set([1,2,3,4,5]), (el) => el === undefined)]);  // []
console.log([...filter([], (el) => el > 0)]);                               // []
