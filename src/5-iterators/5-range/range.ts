export class SymbolRange<T = number | string> implements IterableIterator<T> {
    private start: T;
    private end: T;
    private current: T;

    constructor(start: T, end: T) {
        this.start = start;
        this.end = end;
        this.current = start;
    }

    [Symbol.iterator]() {
        return this;
    }

    public next(): IteratorResult<T> {
        const done = this.isReverse() ? this.current < this.end : this.current > this.end;

        if (!done) {
            const res = this.current;
            this.increment();

            return { done: false, value: res };
        }

        return { done: true, value: undefined };
    }

    public reverse(): IterableIterator<T> {
        return new SymbolRange(this.end, this.start);
    }

    private increment(): void {
        if (typeof this.current === 'number') {
            this.isReverse() ? this.current-- : this.current++;
        } else if (typeof this.current === 'string') {
            const charCode = this.current.charCodeAt(0);
            const incremented = this.isReverse() ? charCode - 1 : charCode + 1;
            // @ts-ignore
            this.current = String.fromCharCode(incremented);
        }
    }

    private isReverse(): boolean {
        return this.start > this.end;
    }
}
