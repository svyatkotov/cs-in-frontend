export function mapSeq<T>(iterable: Iterable<T>, functions: Function[]): IterableIterator<unknown> {
    const iterator = iterable[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },

        next(): IteratorResult<unknown> {
            const res = iterator.next();
            let value = res.value;

            if (res.done) return { done: true, value: undefined };

            for (const fn of functions) {
                value = fn(value);
            }

            return { done: false, value };
        }
    };
}
