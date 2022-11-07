import { IQueue } from "../queue";

export interface IDeque<T> extends IQueue<T> {
    rear: Optional<T>;
    unshift(value: T): void;
    shift(): T;
}
