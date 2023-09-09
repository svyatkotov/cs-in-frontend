import { forEach } from './for-each';

let total = 0;

forEach(new Array(50e7), (el, i, data) => {
    total++;
}).then(() => console.log(total));  // 500000000
