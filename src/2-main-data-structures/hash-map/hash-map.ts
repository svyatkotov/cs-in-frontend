import { LinkedList } from "../../1-fundamental-data-structures";
import { IHashMap, KeyType, ValueType, ArrayValueType } from "./interfaces";

export class HashMap<T = unknown, K = number | string> implements IHashMap<T, K> {
    #arrayCapacity: number;
    #arrayLength: number;
    #array: ArrayValueType<T, K>[];

    constructor() {
        this.#arrayCapacity = 7;
        this.#arrayLength = 0;
        this.#array = new Array(this.#arrayCapacity);
    }

    get(key: KeyType<K>): Optional<T> {
        const index = this.getIndex(key);
        const element = this.#array[index];

        if (element instanceof LinkedList) {
            for (const nodeValue of element as LinkedList<ValueType<T, K>>) {
                if (nodeValue.key === key) {
                    return nodeValue.value;
                }
            }
        } else if (key === (element as ValueType<T, K>)?.key) {
            return (element as ValueType<T, K>).value;
        }
    }

    set(key: KeyType<K>, value: T): void {
        if (this.#arrayLength === this.#arrayCapacity) {
            this.rehash();
        }

        const index = this.getIndex(key);
        const element = this.#array[index];

        if (element instanceof LinkedList) {
            for (const nodeValue of element) {
                if (nodeValue.key === key) {
                    nodeValue.value = value;
                    return;
                }
            }

            element.addRight({ key, value });
        } else if (element !== undefined && element.key !== key) {
            this.#array[index] = new LinkedList();
            const list = this.#array[index] as LinkedList;
            list.addRight(element);
            list.addRight({ key, value });
        } else {
            this.#array[index] = { key, value };

            if (element === undefined) {
                this.#arrayLength++;
            }
        }
    }

    public *keys(): IterableIterator<KeyType<K>> {
        for (const entry of this.entries()) {
            yield entry.key;
        }
    }

    public *entries(): IterableIterator<ValueType<T, K>> {
        for (let i = 0; i < this.#arrayCapacity; i++) {
            const element = this.#array[i];

            if (element === undefined) {
                continue;
            }

            if (element instanceof LinkedList) {
                for (const { key, value } of element) {
                    yield { key, value };
                }
            } else {
                const { key, value } = element;

                yield { key, value };
            }
        }
    }

    private rehash(): void {
        let newCapacity = this.#arrayCapacity * 2;

        while (!this.isPrime(newCapacity)) newCapacity++;

        const entries = [...this.entries()];
        this.#array = new Array(newCapacity);
        this.#arrayCapacity = newCapacity;

        for (const { key, value } of entries) {
            this.set(key, value);
        }
    }

    private isPrime(num: number): boolean {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }

        return num > 1;
    }

    private getIndex(key: KeyType<K>): number {
        const keyStr = key.toString();
        const hash = keyStr.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
        const index = hash % this.#arrayCapacity;

        return index;
    }
}
