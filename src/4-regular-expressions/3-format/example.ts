import { format } from "./format";

// Hello, Bob! Your age is 10. You are manager.
console.log(format('Hello, ${user}! Your age is ${age}. You are ${title}.', { user: 'Bob', age: 10, title: 'manager' }));
