export {};

interface Pessoa {
  name: string,
  idade: number,
  profissao?: string
};

const pessoa: Pessoa = {
  name: 'Thalisson',
  idade: 22
};

const pessoa2: Pessoa = {
  name: 'Shaiane',
  idade: 21,
  profissao: 'Costureira'
};

const arrayPessoas: Array<Pessoa> = [
  pessoa,
  pessoa2
];

const arrayNumber: number[] = [
  1, 2, 3
];

const arrayString: Array<string> = [
  '1', '2', '3'
];