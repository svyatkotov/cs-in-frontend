export interface IStack<T> {
    head: Optional<T>;
    isEmpty: boolean;
    isFull: boolean;
    push(value: T): void;
    pop(): T;
}
