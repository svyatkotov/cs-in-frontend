import { HashMap } from "./hash-map";

const map = new HashMap();
   
map.set(10, 'bla');
map.set('test1', '123');
map.set('test2', '78967');
map.set('test3', 'ertwt');
map.set('test4', 'sdsdf');
map.set('test5', 'bsdfa');
map.set('test6', 'cvbvcb');
map.set('test7', '567');
map.set('test8', '909090');
map.set('test9', '1232131');
map.set('test10', '76676767');
map.set(10, 'new10');
map.set(11, '11');
map.set('foo', 'bar');

console.log(map.get('foo'));    // 'bar'
console.log(map.get(10));       // 'new10'
console.log(map.get('test1'));  // '123'
console.log(map.get('test2'));  // '78967'
console.log(map.get('test3'));  // 'ertwt'
console.log(map.get('test4'));  // 'sdsdf'
console.log(map.get('test5'));  // 'bsdfa'
console.log(map.get('test6'));  // 'cvbvcb'
console.log(map.get('test7'));  // '567'
console.log(map.get('test8'));  // '909090'
console.log(map.get('test9'));  // '1232131'
console.log(map.get('test10')); // '76676767'
console.log(map.get(10));       // 'new10'
console.log(map.get(11));       // '11'

console.log('Keys'); 
console.log([...map.keys()]);
