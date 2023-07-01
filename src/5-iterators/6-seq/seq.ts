export function seq<T>(...args: Iterable<T>[]): IterableIterator<T> {
    let cursor = 0;
    let currentIterator = args[cursor]?.[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            if (cursor < args.length) {
                const res = currentIterator.next();

                if (res.done) {
                    currentIterator = args[++cursor]?.[Symbol.iterator]();

                    return this.next();
                }

                return res;
            }

            return { done: true, value: undefined };
        },
    };
}
