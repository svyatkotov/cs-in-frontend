export function zip<T>(...args: Iterable<T>[]): IterableIterator<T[]> {
    const iterators = args.map(iterable => iterable[Symbol.iterator]());

    return {
        [Symbol.iterator]() {
            return this;
        },

        next(): IteratorResult<T[]> {
            if (iterators.length === 0) return { done: true, value: undefined };

            const value = [];

            for (const iterator of iterators) {
                const res = iterator.next();

                if (res.done) return res;

                value.push(res.value);
            }

            return { value, done: false };
        },
    };
}
