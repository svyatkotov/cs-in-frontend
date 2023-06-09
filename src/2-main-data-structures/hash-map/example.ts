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
map.set('new1', 1);
map.set('new2', 2);
map.set('new3', 3);
map.set('new4', 4);
map.set('new5', 5);
map.set('new6', 6);
map.set('new7', 7);
map.set('new8', 8);

console.log(map.get('foo'));         // 'bar'
console.log(map.get(10));            // 'new10'
console.log(map.get('test1'));       // '123'
console.log(map.get('test2'));       // '78967'
console.log(map.get('test3'));       // 'ertwt'
console.log(map.get('test4'));       // 'sdsdf'
console.log(map.get('test5'));       // 'bsdfa'
console.log(map.get('test6'));       // 'cvbvcb'
console.log(map.get('test7'));       // '567'
console.log(map.get('test8'));       // '909090'
console.log(map.get('test9'));       // '1232131'
console.log(map.get('test10'));      // '76676767'
console.log(map.get(10));            // 'new10'
console.log(map.get(11));            // '11'
console.log(map.get('unexistent'));  // undefined
console.log(map.get('new1'));        // 1
console.log(map.get('new2'));        // 2
console.log(map.get('new3'));        // 3
console.log(map.get('new4'));        // 4
console.log(map.get('new5'));        // 5
console.log(map.get('new6'));        // 6
console.log(map.get('new7'));        // 7
console.log(map.get('new8'));        // 8

console.log('Keys');
console.log([...map.keys()]);
/*
    Keys
    [
        'new1',  'new2',   'new3',
        'new4',  'new5',   'new6',
        'new7',  'test1',  'new8',
        'test2', 'test3',  'test4',
        'test5', 'test6',  'test7',
        'test8', 10,       'test9',
        11,      'test10', 'foo'
    ]
*/
