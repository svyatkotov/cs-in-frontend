import { mapSeq } from "./map-seq";

console.log([...mapSeq([1, 2, 3], [(el: any) => el * 2, (el: any) => el - 1])]);  // [1, 3, 5]
