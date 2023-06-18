import { myRegExp, replaceVal } from "./replace";

console.log('aaaabbbbczzzz'.replace(myRegExp, replaceVal) === 'abcz');         // true
console.log('abababbbabcabc'.replace(myRegExp, replaceVal) === 'abbabc');      // true
console.log('foofoobabaaaazze'.replace(myRegExp, replaceVal) === 'foobaaze');  // true
console.log('abcdabcd'.replace(myRegExp, replaceVal) === 'abcdabcd');          // true
