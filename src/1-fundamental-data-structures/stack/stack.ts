import { IStack } from "./interfaces";

export class Stack<T = unknown> implements IStack<T> {
    #array: T[];
    #headIndex: number;

    constructor(maxLength: number = 1000) {
        this.#array = new Array(maxLength);
        this.#headIndex = -1;
    }

    get head(): Optional<T> {
        return this.#array[this.#headIndex];
    }

    get isEmpty(): boolean {
        return this.#headIndex === -1;
    }

    get isFull(): boolean {
        return this.#headIndex === this.#array.length - 1;
    }

    push(value: T): void {
        if (this.isFull) {
            throw new Error('Cannot push: the stack is full');
        }

        this.#array[++this.#headIndex] = value;
    }

    pop(): T {
        if (this.isEmpty) {
            throw new Error('Cannot pop: the stack is empty');
        }

        return this.#array[this.#headIndex--];
    }
}
