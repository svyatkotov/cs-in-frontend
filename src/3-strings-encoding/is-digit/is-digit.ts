export function isDigit(str: string): boolean {
    const unicodeDigits = {
        arabic: new Set([
            '30',
            '31',
            '32',
            '33',
            '34',
            '35',
            '36',
            '37',
            '38',
            '39',
        ]),
        latin: new Set([
            '2160',
            '2161',
            '2162',
            '2163',
            '2164',
            '2165',
            '2166',
            '2167',
            '2168',
            '2169',
            '216a',
            '216b',
            '216c',
            '216d',
            '216e',
            '216f',
        ]),
    };

    return [...str].every(char => unicodeDigits.arabic.has(getUnicodeCode(char)))
        || [...str].every(char => unicodeDigits.latin.has(getUnicodeCode(char)));
}

function getUnicodeCode(char: string): string {
    return char.charCodeAt(0).toString(16);
}
