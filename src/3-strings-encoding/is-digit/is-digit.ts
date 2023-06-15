export function isDigit(str: string): boolean {
    return [...str].every(char => char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)
        || [...str].every(char => char.charCodeAt(0) >= 8544 && char.charCodeAt(0) <= 8559);
}
