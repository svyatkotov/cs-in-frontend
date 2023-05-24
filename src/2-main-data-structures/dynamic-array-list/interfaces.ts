export interface IDynamicArray<T> {
    length: number;
    get(index: number): Optional<T>;
    add(value: T): void;
    [Symbol.iterator](): IterableIterator<T>;
}
