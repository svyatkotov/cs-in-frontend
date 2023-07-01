export function enumerate<T>(iterable: Iterable<T>): IterableIterator<[number, T]> {
    const iterator = iterable[Symbol.iterator]();
    let cursor = 0;

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            const res = iterator.next();

            if (!res.done) {
                return { done: false, value: [cursor++, res.value] };
            }

            return res;
        },
    };
}
