export function random(from: number, to: number): IterableIterator<number> {
    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            return {
                done: false,
                value: Math.floor(Math.random() * (to - from + 1) + from),
            };
        },
    };
}
