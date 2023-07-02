export function take<T>(iterable: Iterable<T>, count: number): IterableIterator<T> {
    let cursor = 0;
    const iterator = iterable[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },

        next(): IteratorResult<T> {
            if (cursor++ < count) {
                return iterator.next();
            }

            return { done: true, value: undefined };
        },
    };
}
