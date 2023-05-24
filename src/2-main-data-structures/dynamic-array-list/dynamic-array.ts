import { ILinkedList, LinkedList } from "../../1-fundamental-data-structures/linked-list";
import { IDynamicArray } from "./interfaces";

export class DynamicArray<T = unknown> implements IDynamicArray<T> {
    #list: ILinkedList<T[]>;
    #capacity: number;
    #length: number;
    #currentArrIndex: number;

    constructor(capacity: number) {
        this.#list = new LinkedList();
        this.#list.addRight(new Array(capacity));
        this.#capacity = capacity;
        this.#length = 0;
        this.#currentArrIndex = 0;
    }

    get length(): number {
        return this.#length;
    }

    get(index: number): Optional<T> {
        if (index < 0 || index >= this.#length) {
            return undefined;
        }

        let currentIndex = 0;

        for (const value of this) {
            if (index === currentIndex) {
                return value;
            }

            currentIndex++;
        }
    }

    add(value: T): void {
        if (this.#currentArrIndex === this.#capacity) {
            this.#list.addRight(new Array(this.#capacity));
            this.#currentArrIndex = 0;
        }

        this.#list.last!.value[this.#currentArrIndex++] = value;
        this.#length++;
    }

    *[Symbol.iterator](): IterableIterator<T> {
        let currentNode = this.#list.first!;
        let currentArrIndex = 0;

        for (let index = 0; index < this.#length; index++) {
            if (currentArrIndex === this.#capacity) {
                currentNode = currentNode.next!;
                currentArrIndex = 0;
            }

            yield currentNode.value[currentArrIndex++];
        }
    }
}
