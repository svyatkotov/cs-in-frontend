"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _first, _last;
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("./node");
class List {
    constructor() {
        _first.set(this, null);
        _last.set(this, null);
    }
    get first() {
        return __classPrivateFieldGet(this, _first);
    }
    get last() {
        return __classPrivateFieldGet(this, _last);
    }
    get isEmpty() {
        return __classPrivateFieldGet(this, _first) === null;
    }
    addRight(value) {
        const node = new node_1.Node(value);
        if (this.isEmpty) {
            __classPrivateFieldSet(this, _first, node);
            __classPrivateFieldSet(this, _last, node);
        }
        else {
            node.prev = __classPrivateFieldGet(this, _last);
            __classPrivateFieldGet(this, _last).next = node;
            __classPrivateFieldSet(this, _last, node);
        }
    }
    addLeft(value) {
        const node = new node_1.Node(value);
        if (this.isEmpty) {
            __classPrivateFieldSet(this, _first, node);
            __classPrivateFieldSet(this, _last, node);
        }
        else {
            node.next = __classPrivateFieldGet(this, _first);
            __classPrivateFieldGet(this, _first).prev = node;
            __classPrivateFieldSet(this, _first, node);
        }
    }
    removeLeft() {
        if (this.isEmpty) {
            throw new Error('The list is empty');
        }
        const first = __classPrivateFieldGet(this, _first);
        __classPrivateFieldSet(this, _first, __classPrivateFieldGet(this, _first).next);
        if (__classPrivateFieldGet(this, _first)) {
            __classPrivateFieldGet(this, _first).prev = null;
        }
        else {
            __classPrivateFieldSet(this, _last, null);
        }
        return first.value;
    }
    removeRight() {
        if (this.isEmpty) {
            throw new Error('The list is empty');
        }
        const last = __classPrivateFieldGet(this, _last);
        __classPrivateFieldSet(this, _last, __classPrivateFieldGet(this, _last).prev);
        if (__classPrivateFieldGet(this, _last)) {
            __classPrivateFieldGet(this, _last).next = null;
        }
        else {
            __classPrivateFieldSet(this, _first, null);
        }
        return last.value;
    }
    *[(_first = new WeakMap(), _last = new WeakMap(), Symbol.iterator)]() {
        if (this.isEmpty) {
            return;
        }
        let temp = __classPrivateFieldGet(this, _first);
        while (temp.next !== null) {
            yield temp.value;
            temp = temp.next;
        }
        yield temp.value;
    }
}
exports.List = List;
