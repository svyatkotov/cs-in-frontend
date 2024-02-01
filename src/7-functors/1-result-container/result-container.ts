type State = 'ok' | 'error';
type Data<T> = T | Result<T>;

export class Result<T> {
    protected state: State;
    protected readonly data?: T;
    protected readonly error?: Error;

    constructor(data: () => Data<T>) {
        try {
            const d = data();

            this.data = d instanceof Result ? d.unwrap() : d;
            this.state = 'ok';
        } catch (err: any) {
            this.state = 'error';
            this.error = err;
        }
    }

    static error<T>(data: T): Result<T> {
        return new Result(() => {
            throw new Error(`Error occurred with value ${data}`);
        });
    }

    unwrap(): T | undefined {
        if (this.state === 'error') {
            throw this.error;
        }

        return this.data;
    }

    map(cb: (data: T) => T) {
        return new Result(() => {
            if (this.state === 'error') {
                throw this.error;
            }

            return cb(this.data!);
        });
    }

    flatMap(cb: (data: T) => Result<T>): Result<T> {
        return new Result(() => {
            if (this.state === 'error') {
                throw this.error;
            }

            return cb(this.data!);
        });
    }

    catch(cb: (err: Error) => void) {
        return new Result(() => {
            if (this.state === 'error') {
                cb(this.error!);
            }

            return this.data!;
        });
    }
}
