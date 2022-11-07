# Домашнее задание к лекции № 1 - Данные и типы данных. Типизация в языках программирования. Фундаментальные структуры данных.

1. Реализовать двусторонний двусвязанный связанный список

```js
const list = LinkedList();

list.add(1);
list.add(2);
list.add(3);

console.log(list.first.value);           // 1
console.log(list.last.value);            // 3
console.log(list.first.next.value);      // 2
console.log(list.first.next.prev.value); // 1
```

1.1 Сделать связанный список итерируемым *

```js
const list = LinkedList();

list.add(1);
list.add(2);
list.add(3);

for (const value of list) {
  console.log(value);
}
```

2. Реализовать очередь на основе связанного списка

```js
const queue = Queue();

queue.push(10);
queue.push(11);
queue.push(12);

console.log(queue.head);  // 10

console.log(queue.pop()); // 10

console.log(queue.head);  // 11

console.log(queue.pop()); // 11
console.log(queue.pop()); // 12
console.log(queue.pop()); // Exception
```

3. Реализовать двустороннюю очередь

```js
const dequeue = Queue();

dequeue.push(10);
dequeue.unshift(11);
dequeue.push(12);

console.log(dequeue.pop());   // 12
console.log(dequeue.shift()); // 11
console.log(dequeue.pop());   // 10
console.log(dequeue.pop());   // Exception
```

4. Реализовать стек на основе массива фиксированной длины

```js
const stack = Stack();

stack.push(10);
stack.push(11);
stack.push(12);

console.log(stack.head);  // 12

console.log(stack.pop()); // 12

console.log(stack.head);  // 11

console.log(stack.pop()); // 11
console.log(stack.pop()); // 10
console.log(stack.pop()); // Exception
```

5. Реализовать структуру на основе массива

```js
const jackBlack = Structure(['name', 'lastName', 'age']);

jackBlack.set('name', 'Jack');
jackBlack.set('lastName', 'Black');
jackBlack.set('age', 53);

jackBlack.get('name') // 'Jack'
```