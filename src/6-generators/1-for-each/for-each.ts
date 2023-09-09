export function forEach<T, I extends Iterable<T>>(iterable: I, callback: (el: T, i: number, data: I) => void): Promise<void> {
    const MAX = 50;
    const DELAY = 50;

    return new Promise((resolve, reject) => {
        let time = Date.now();

        function* iter() {
            let index = 0;

            for (const value of iterable) {
                try {
                    callback(value, index++, iterable);
                } catch (err) {
                    reject(err);
                    return;
                }

                if (Date.now() - time > MAX) {
                    setTimeout(() => {
                        time = Date.now();
                        worker.next();
                    }, DELAY);

                    yield;
                }
            }

            resolve();
        }

        const worker = iter();
        worker.next();
    });
}
