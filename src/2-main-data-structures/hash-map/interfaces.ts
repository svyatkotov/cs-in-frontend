import { LinkedList } from "../../1-fundamental-data-structures/linked-list";

export type KeyType<K> = K & { toString(): string };
export type ValueType<T, K> = {
    key: KeyType<K>;
    value: T;
};
export type ArrayValueType<T, K> = Optional<ValueType<T, K> | LinkedList<ValueType<T, K>>>;

export interface IHashMap<T, K> {
    set(key: KeyType<K>, value: T): void;
    get(key: KeyType<K>): Optional<T>;
}
