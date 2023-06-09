export function binarySearch(value: number, array: number[]): number {
    let left = 0;
    let right = array.length - 1;
    
    while (left <= right) {
        const index = Math.floor((left + right) / 2);

        if (value === array[index]) {
            return index;
        } else if (value > array[index]) {
            left = index + 1;
        } else {
            right = index - 1;
        }
    }

    return -1;
}
