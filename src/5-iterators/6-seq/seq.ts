export function seq(...args: Iterable<unknown>[]): IterableIterator<unknown> {
    let cursor = 0;
    let currentIterator = args[cursor]?.[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },

        next(): IteratorResult<unknown> {
            while (true) {
                if (currentIterator) {
                    const res = currentIterator.next();

                    if (res.done) {
                        currentIterator = args[++cursor]?.[Symbol.iterator]();
                        continue;
                    }

                    return res;
                }

                return { done: true, value: undefined };
            }
        },
    };
}
