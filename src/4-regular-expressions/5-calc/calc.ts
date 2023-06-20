export function calc(str: string): string {
    return str.replace(/((?<!\p{L}) ?\(?-?\d+\)? ?(?!\p{L})([*]{2}|[+\-*/])?)+/gu, (...args) => eval(args[0]));
}
