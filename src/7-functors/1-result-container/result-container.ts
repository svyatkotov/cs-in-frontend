type State = 'ok' | 'error';
type Data<T> = T | Result<T>;

function cast<T>(value: any): T {
    return value;
}

export class Result<T> {
    readonly state: State;
    protected readonly data?: T;
    protected readonly error?: Error;

    constructor(executor: () => Data<T>, unpack: boolean = true) {
        try {
            const data = executor();

            this.data = unpack && data instanceof Result ? data.unwrap() : cast(data);
            this.state = 'ok';
        } catch (err: any) {
            this.state = 'error';
            this.error = err;
        }
    }

    static error<T>(data: T): Result<undefined> {
        return new Result(() => {
            throw new Error(`Error occurred with value ${data}`);
        });
    }

    static ok<T>(data: Data<T>): Result<T> {
        return new Result(() => data);
    }

    unwrap(): T | undefined {
        if (this.state === 'error') {
            throw this.error;
        }

        return this.data;
    }

    map<K>(executor: (data: T) => K): Result<K> {
        return new Result(() => {
            if (this.state === 'error') {
                throw this.error;
            }

            return executor(this.data!);
        }, false);
    }

    flatMap<R>(executor: (data: T) => Result<R>): Result<R> {
        return new Result(() => {
            if (this.state === 'error') {
                throw this.error;
            }

            return executor(this.data!);
        });
     }

    catch(handler: (err: Error) => void): Result<T> {
        return new Result(() => {
            if (this.state === 'error') {
                handler(this.error!);
            }

            return this.data!;
        });
    }
}
