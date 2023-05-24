export interface IDynamicArray<T> {
    length: number;
    capacity: number;
    get(index: number): Optional<T>;
    push(value: T): void;
    [Symbol.iterator](): IterableIterator<T>;
}
