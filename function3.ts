function lastElement<T>(array: T[]): T | undefined {
    return array[array.length - 1]
}

console.log(lastElement([2, 3, 4])); // 4
console.log(lastElement(["cat", "dog", "bird", "monkey"])); // "monkey"
console.log(lastElement([false, true, true])); // true
console.log(lastElement([])); // undefined
