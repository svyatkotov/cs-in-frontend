import { DynamicArray } from "./dynamic-array";

const arr = new DynamicArray(5);
   
arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.add(5);
arr.add(6);
arr.add(7);
arr.add(8);
arr.add(9);

console.log('Length: ' + arr.length);  // 9

console.log(arr.get(0));  // 1
console.log(arr.get(1));  // 2
console.log(arr.get(4));  // 5
console.log(arr.get(8));  // 9
console.log(arr.get(9));  // undefined

console.log('Iteration');
for (const value of arr) {
    console.log(value); // 1,2,3,4,5,6,7,8,9
}
