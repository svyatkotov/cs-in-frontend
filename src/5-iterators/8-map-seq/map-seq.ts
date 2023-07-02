export function mapSeq<T>(iterable: Iterable<T>, functions: Function[]): IterableIterator<unknown> {
    const iterator = iterable[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },

        next(): IteratorResult<unknown> {
            let res = iterator.next();

            if (res.done) return { done: true, value: undefined };

            for (const fn of functions) {
                res = fn(res);
            }

            return { done: false, value: res.value };
        }
    };
}
