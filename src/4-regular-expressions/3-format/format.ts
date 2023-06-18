export function format(template: string, params: Record<string, string | number>): string {
    return template.replace(/\${(\w+)}/g, (...args) => params[args[1]].toString());
}
