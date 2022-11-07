"use strict";
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("./list");
const list = new list_1.List();
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
console.log((_a = list.first) === null || _a === void 0 ? void 0 : _a.value); // 5
console.log((_b = list.last) === null || _b === void 0 ? void 0 : _b.value); // 6
console.log((_d = (_c = list.first) === null || _c === void 0 ? void 0 : _c.next) === null || _d === void 0 ? void 0 : _d.value); // 6
console.log((_g = (_f = (_e = list.first) === null || _e === void 0 ? void 0 : _e.next) === null || _f === void 0 ? void 0 : _f.prev) === null || _g === void 0 ? void 0 : _g.value); // 5
console.log('Iteration');
for (let value of list) {
    console.log(value); // 5, 6
}
