export function filter<T>(iterable: Iterable<T>, predicate: (el: T) => boolean): IterableIterator<T> {
    const iterator = iterable[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            let res = iterator.next();

            while (!predicate(res.value) && !res.done) {
                res = iterator.next();
            }

            return res;
        },
    };
}
