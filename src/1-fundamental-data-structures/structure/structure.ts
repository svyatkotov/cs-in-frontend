import { GetIndexByKeyType, IStructure } from "./interfaces";

export class Structure<T = unknown> implements IStructure<T> {
    #structure: T[];
    #getIndexByKey: GetIndexByKeyType;

    constructor(keys: string[]) {
        this.#structure = new Array(keys.length);
        this.#getIndexByKey = new Function('key', Structure.initGetIndexByKeyFunctionBody(keys)) as GetIndexByKeyType;
    }

    set(key: string, value: T): void {
        this.#structure[this.#getIndexByKey(key)] = value;
    }

    get(key: string): T {
        return this.#structure[this.#getIndexByKey(key)];
    }

    private static initGetIndexByKeyFunctionBody(keys: string[]) {
        const cases: string = keys.map((key, index) => `case('${key}'): return ${index};`).join('');

        return `
            switch(key) {
                ${cases}
                default: throw new ReferenceError('Key not found')
            }
        `;
    }
}
