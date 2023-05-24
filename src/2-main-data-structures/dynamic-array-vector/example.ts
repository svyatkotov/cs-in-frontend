import { DynamicArray } from "./dynamic-array";

const arr = new DynamicArray(2);

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);

console.log(arr.get(0));  // 1
console.log(arr.get(1));  // 2
console.log(arr.get(4));  // 5
console.log(arr.get(5));  // undefined

console.log('Iteration');
for (const value of arr) {
    console.log(value); // 1,2,3,4,5
}
