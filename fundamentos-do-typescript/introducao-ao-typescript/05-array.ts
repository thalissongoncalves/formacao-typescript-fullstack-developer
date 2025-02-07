const array: Array<number> = [1, 2, 3, 4];

const stringArray: string[] = ["a", "b", "c"];

console.log(array[0]);

console.log(stringArray.length);

console.log("array original", array);

array.push(5);

console.log("array com novo elemento", array);

array.pop();

console.log("array retirando o ultimo elemento", array);
