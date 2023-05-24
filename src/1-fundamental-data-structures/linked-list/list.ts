import { IList, INode } from "./interfaces";
import { Node } from "./node";

export class List<T = unknown> implements IList<T> {
    #first: Nullable<INode<T>> = null;
    #last: Nullable<INode<T>> = null;

    get first(): Nullable<INode<T>> {
        return this.#first;
    }

    get last(): Nullable<INode<T>> {
        return this.#last;
    }

    get isEmpty(): boolean {
        return this.#first === null;
    }

    addRight(value: T): void {
        const node = new Node(value);

        if (this.isEmpty) {
            this.#first = node;
            this.#last = node;
        } else {
            node.prev = this.#last;
            this.#last!.next = node;
            this.#last = node;
        }
    }

    addLeft(value: T): void {
        const node = new Node(value);

        if (this.isEmpty) {
            this.#first = node;
            this.#last = node;
        } else {
            node.next = this.#first;
            this.#first!.prev = node;
            this.#first = node;
        }
    }

    removeLeft(): T {
        if (this.isEmpty) {
            throw new Error('The list is empty');
        }

        const first = this.#first!;

        this.#first = this.#first!.next;

        if (this.#first) {
            this.#first.prev = null;
        } else {
            this.#last = null;
        }

        return first.value;
    }

    removeRight(): T {
        if (this.isEmpty) {
            throw new Error('The list is empty');
        }

        const last = this.#last!;

        this.#last = this.#last!.prev;

        if (this.#last) {
            this.#last.next = null;
        } else {
            this.#first = null;
        }

        return last.value;
    }

    *[Symbol.iterator](): IterableIterator<T> {
        for (
            let currentNode = this.#first;
            currentNode !== null;
            currentNode = currentNode.next
        ) {
            yield currentNode.value;
        }
    }
}
