import { List } from "./list";

const list = new List<number>();

list.addRight(1);
list.addRight(2);
list.addRight(3);

list.removeLeft();
list.removeLeft();
list.removeLeft();

list.addRight(4);
list.addRight(5);
list.addRight(6);

list.removeLeft();

console.log(list.first?.value);             // 5
console.log(list.last?.value);              // 6
console.log(list.first?.next?.value);       // 6
console.log(list.first?.next?.prev?.value); // 5

console.log('Iteration');
for (let value of list) {
    console.log(value); // 5, 6
}
