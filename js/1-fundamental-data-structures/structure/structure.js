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
var _structure, _getIndexByKey;
Object.defineProperty(exports, "__esModule", { value: true });
class Structure {
    constructor(keys) {
        _structure.set(this, void 0);
        _getIndexByKey.set(this, void 0);
        __classPrivateFieldSet(this, _structure, new Array(keys.length));
        __classPrivateFieldSet(this, _getIndexByKey, new Function('key', Structure.initGetIndexByKeyFunctionBody(keys)));
    }
    set(key, value) {
        __classPrivateFieldGet(this, _structure)[__classPrivateFieldGet(this, _getIndexByKey).call(this, key)] = value;
    }
    get(key) {
        return __classPrivateFieldGet(this, _structure)[__classPrivateFieldGet(this, _getIndexByKey).call(this, key)];
    }
    static initGetIndexByKeyFunctionBody(keys) {
        const cases = keys.map((key, index) => `case('${key}'): return ${index};`).join('');
        return `
            switch(key) {
                ${cases}
                default: throw new ReferenceError('Key not found')
            }
        `;
    }
}
exports.Structure = Structure;
_structure = new WeakMap(), _getIndexByKey = new WeakMap();
