"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _list;
Object.defineProperty(exports, "__esModule", { value: true });
const linked_list_1 = require("../linked-list");
class Deque {
    constructor() {
        _list.set(this, new linked_list_1.LinkedList());
    }
    get head() {
        var _a;
        return (_a = __classPrivateFieldGet(this, _list).first) === null || _a === void 0 ? void 0 : _a.value;
    }
    get rear() {
        var _a;
        return (_a = __classPrivateFieldGet(this, _list).last) === null || _a === void 0 ? void 0 : _a.value;
    }
    push(value) {
        __classPrivateFieldGet(this, _list).addRight(value);
    }
    pop() {
        if (__classPrivateFieldGet(this, _list).isEmpty) {
            throw new Error('The dequeue is empty');
        }
        return __classPrivateFieldGet(this, _list).removeRight();
    }
    unshift(value) {
        __classPrivateFieldGet(this, _list).addLeft(value);
    }
    shift() {
        if (__classPrivateFieldGet(this, _list).isEmpty) {
            throw new Error('The dequeue is empty');
        }
        return __classPrivateFieldGet(this, _list).removeLeft();
    }
}
exports.Deque = Deque;
_list = new WeakMap();
