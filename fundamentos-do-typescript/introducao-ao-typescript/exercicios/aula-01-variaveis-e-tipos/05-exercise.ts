export {};
// Exercício 5: Validando Tipos
// Declare uma variável info que pode ser string ou número.
let info: string | number;
// Escreva uma função que receba essa variável e exiba:
// "É uma string" se o valor for do tipo string.
// "É um número" se o valor for do tipo número.
// Teste a função com os valores "TypeScript" e 2024.
const wordOrNumber = (word: string | number) => {
  if (typeof(word) === "string") {
    console.log("É uma string")
  } else if (typeof(word) === "number") {
    console.log("É um número")
  }
};

wordOrNumber("Typescript")
wordOrNumber(2024)