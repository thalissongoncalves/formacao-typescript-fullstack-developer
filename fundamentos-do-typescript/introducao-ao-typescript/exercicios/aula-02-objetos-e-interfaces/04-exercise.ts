export {};
// Exercício 4: Arrays Tipados
// Crie três arrays tipados:
// Um array de números contendo idades (ex.: [18, 25, 30]).
// Um array de strings contendo nomes de cidades (ex.: ['São Paulo', 'Rio de Janeiro']).
// Um array de objetos baseados na interface Pessoa da aula anterior.
// Escreva uma função chamada imprimirArray que recebe um array genérico e imprime todos os seus elementos no console.

// Interface Pessoa
interface Pessoa {
  name: string,
  idade: number,
  profissao?: string
};

// Arrays tipados
const idades: number[] = [18, 25, 30];
const cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Varginha'];
const pessoas: Pessoa[] = [
  {name: 'Thalisson', idade: 22, profissao: 'Suporte Técnico em TI'},
  {name: 'Shaiane', idade: 21, profissao: 'Costureira e Vendedora'}
];

// Função genérica para imprimir arrays
const imprimirArray = <T>(array: T[]): void => {
  array.forEach((item) => {
    if (typeof item === 'object' && item !== null) {
      console.log(JSON.stringify(item, null, 2));
    } else {
      console.log(item);
    };
  });
};

// Testes
imprimirArray(idades);
imprimirArray(cidades);
imprimirArray(pessoas);