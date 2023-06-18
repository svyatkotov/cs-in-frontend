import { myRegExp } from "./split";

console.log('foo    bla.bar,gd;;4'.split(myRegExp));   // ['foo', 'bla', 'bar', 'gd', '', '4']
