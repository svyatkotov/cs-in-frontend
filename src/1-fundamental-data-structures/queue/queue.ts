import { ILinkedList, LinkedList } from "../linked-list";

import { IQueue } from "./interfaces";

export class Queue<T = unknown> implements IQueue<T> {
    #list: ILinkedList<T> = new LinkedList();

    get head(): Optional<T> {
        return this.#list.first?.value;
    }

    push(value: T): void {
        this.#list.addRight(value);
    }

    pop(): T {
        if (this.#list.isEmpty) {
            throw new Error('The queue is empty');
        }

        return this.#list.removeLeft();
    }
}
