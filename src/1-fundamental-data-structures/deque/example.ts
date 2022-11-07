import { Deque } from "./deque";

const dequeue = new Deque<number>();

console.log('Head before add: ' + dequeue.head); // undefined
console.log('Rear before add: ' + dequeue.rear); // undefined

dequeue.push(10);
dequeue.unshift(11);
dequeue.push(12);

console.log('Head after add: ' + dequeue.head); // 11
console.log('Rear after add: ' + dequeue.rear); // 12

console.log(dequeue.pop());   // 12
console.log(dequeue.shift()); // 11
console.log(dequeue.pop());   // 10
console.log(dequeue.pop());   // Exception
