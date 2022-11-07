export interface IQueue<T> {
    head: Optional<T>;
    push(value: T): void;
    pop(): T;
}
