export const myRegExp = /([a-z]{1,3}?)\1+/g;

export function replaceVal(_: string, group: string): string {
    return group;
}
