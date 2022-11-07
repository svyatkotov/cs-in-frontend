"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _array, _headIndex;
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor(maxLength = 1000) {
        _array.set(this, void 0);
        _headIndex.set(this, void 0);
        __classPrivateFieldSet(this, _array, new Array(maxLength));
        __classPrivateFieldSet(this, _headIndex, -1);
    }
    get head() {
        return __classPrivateFieldGet(this, _array)[__classPrivateFieldGet(this, _headIndex)];
    }
    get isEmpty() {
        return __classPrivateFieldGet(this, _headIndex) === -1;
    }
    get isFull() {
        return __classPrivateFieldGet(this, _headIndex) === __classPrivateFieldGet(this, _array).length - 1;
    }
    push(value) {
        if (this.isFull) {
            throw new Error('Cannot push: the stack is full');
        }
        __classPrivateFieldGet(this, _array)[__classPrivateFieldSet(this, _headIndex, +__classPrivateFieldGet(this, _headIndex) + 1)] = value;
    }
    pop() {
        var _a;
        if (this.isEmpty) {
            throw new Error('Cannot pop: the stack is empty');
        }
        return __classPrivateFieldGet(this, _array)[__classPrivateFieldSet(this, _headIndex, (_a = +__classPrivateFieldGet(this, _headIndex)) - 1), _a];
    }
}
exports.Stack = Stack;
_array = new WeakMap(), _headIndex = new WeakMap();
