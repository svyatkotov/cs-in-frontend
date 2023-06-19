export function calc(str: string): string {
    return str.replace(/((?<![а-яА-Я]) ?\(?-?\d+\)? ?(?![а-яА-Я])([*]{2}|[+\-*\/])?)+/g, (...args) => eval(args[0]));
}
