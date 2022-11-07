export interface IStructure<T> {
    set(key: string, value: T): void;
    get(key: string): T;
}

export type GetIndexByKeyType = (key: string) => number;
