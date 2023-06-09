import { IDynamicArray } from "./interfaces";

export class DynamicArray<T = unknown> implements IDynamicArray<T> {
    #array: T[];
    #length: number;
    #capacity: number;

    constructor(capacity: number = 10) {
        this.#array = new Array(capacity);
        this.#capacity = capacity;
        this.#length = 0;
    }

    get length(): number {
        return this.#length;
    }

    get capacity(): number {
        return this.#length;
    }

    get(index: number): Optional<T> {
        return this.#array[index];
    }

    push(value: T): void {
        if (this.#length === this.#capacity) {
            this.#capacity *= 2;
            const newArray = new Array(this.#capacity);

            for (let i = 0; i < this.#length; i++) {
                newArray[i] = this.#array[i];
            }

            this.#array = newArray;
        }

        this.#array[this.#length++] = value;
    }

    *[Symbol.iterator](): IterableIterator<T> {
        for (let i = 0; i < this.#length; i++) {
            yield this.#array[i];
        }
    }
}
