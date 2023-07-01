export function filter<T>(iterable: Iterable<T>, predicate: (el: T) => boolean): IterableIterator<T> {
    const iterator = iterable[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            const res = iterator.next();

            if (predicate(res.value) || res.done) {
                return res;
            }

            return this.next();
        },
    };
}
