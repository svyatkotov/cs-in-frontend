import { Queue } from "./queue";

const queue = new Queue<number>();

console.log(queue.head);  // undefined

queue.push(10);
queue.push(11);
queue.push(12);

console.log(queue.head);  // 10

console.log(queue.pop()); // 10

console.log(queue.head);  // 11

console.log(queue.pop()); // 11
console.log(queue.pop()); // 12
console.log(queue.pop()); // Exception
