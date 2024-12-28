export {};
// Exercício 2: Reatribuindo Variáveis
// Dada a declaração inicial abaixo:
// let info: string | number;
let info: string | number;
// Atribua o valor 42 à variável info.
info = 42
console.log(typeof(info))
// Em seguida, reatribua o valor "Olá, TypeScript!" a essa mesma variável.
info = 'Olá, TypeScript!'
console.log(typeof(info))
// Exiba no console o tipo da variável em cada reatribuição usando typeof.