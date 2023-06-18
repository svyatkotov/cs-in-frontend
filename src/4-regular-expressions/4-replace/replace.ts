export const myRegExp = /([a-z]{1,3}?)\1+/g;

export function replaceVal(...args: any[]): string {
    return args[1];
}
