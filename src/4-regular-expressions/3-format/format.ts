export function format(template: string, params: Record<string, string | number>): string {
    return template.replace(/\${(\w+)}/g, (_, varName) => params[varName].toString());
}
