export interface IList<T> {
    first: Nullable<INode<T>>;
    last: Nullable<INode<T>>;
    isEmpty: boolean;
    addRight(value: T): void;
    addLeft(value: T): void;
    removeRight(): T;
    removeLeft(): T;
    values(): IterableIterator<T>;
}

export interface INode<T> {
    value: T;
    next: Nullable<INode<T>>;
    prev: Nullable<INode<T>>;
}
