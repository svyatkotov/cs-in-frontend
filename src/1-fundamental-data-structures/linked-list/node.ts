import { INode } from "./interfaces";

export class Node<T = unknown> implements INode<T> {
    value: T;

    next: Nullable<INode<T>> = null;
    prev: Nullable<INode<T>> = null;

    constructor(value: T) {
        this.value = value;
    }
}
