export function calc(str: string): string {
    return str.replace(/[(\d-][()\d\-+*/ ]+[)\d]/g, (...args) => eval(args[0]));
}
