import { binarySearch } from './binary-search';

console.log(binarySearch(4, [-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 98])); // 8 - это индекс
console.log(binarySearch(1, [1, 2, 3, 4])); // 0
console.log(binarySearch(4, [-432])); // -1
console.log(binarySearch(4, [])); // -1
