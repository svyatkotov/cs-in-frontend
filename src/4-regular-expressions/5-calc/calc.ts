export function calc(str: string): string {
    return str.replace(/[(\d-][()\d\-+*/ ]+[)\d]/g, str => eval(str));
}
