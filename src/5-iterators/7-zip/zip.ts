export function zip<T>(...args: Iterable<T>[]): IterableIterator<T[]> {
    const iterators = new Set(args.map(iterable => iterable[Symbol.iterator]()));

    return {
        [Symbol.iterator]() {
            return this;
        },

        next(): IteratorResult<T[]> {
            const value = [];

            for (const iterator of iterators) {
                const res = iterator.next();

                if (res.done) {
                    iterators.delete(iterator);
                    continue;
                }

                value.push(res.value);
            }

            return iterators.size === 0 ? { done: true, value: undefined } : { value, done: false };
        },
    };
}
