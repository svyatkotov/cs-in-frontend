"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = require("./queue");
const queue = new queue_1.Queue();
console.log(queue.head); // undefined
queue.push(10);
queue.push(11);
queue.push(12);
console.log(queue.head); // 10
console.log(queue.pop()); // 10
console.log(queue.head); // 11
console.log(queue.pop()); // 11
console.log(queue.pop()); // 12
console.log(queue.pop()); // Exception
