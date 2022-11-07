import { ILinkedList, LinkedList } from "../linked-list";

import { IDeque } from "./interfaces";

export class Deque<T = unknown> implements IDeque<T> {
    #list: ILinkedList<T> = new LinkedList();

    get head(): Optional<T> {
        return this.#list.first?.value;
    }

    get rear(): Optional<T> {
        return this.#list.last?.value;
    }

    push(value: T): void {
        this.#list.addRight(value);
    }

    pop(): T {
        if (this.#list.isEmpty) {
            throw new Error('The dequeue is empty');
        }

        return this.#list.removeRight();
    }

    unshift(value: T): void {
        this.#list.addLeft(value);
    }

    shift(): T {
        if (this.#list.isEmpty) {
            throw new Error('The dequeue is empty');
        }

        return this.#list.removeLeft();
    }
}
