export {};

const array: Array<number> = [1, 2, 3, 4];

array.forEach((num) => {
  if (num > 2 && num % 2 === 0) {
    console.log(num * 2);
  }
});

array.map((num) => console.log(num));

const stringArray: string[] = ["a", "b", "c"];

const buscaNum = array.find((num) => num > 2);
