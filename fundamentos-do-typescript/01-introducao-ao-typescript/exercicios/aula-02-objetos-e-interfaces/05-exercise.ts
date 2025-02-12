export {};
// Exercício 5: Propriedades Opcionais
// Expanda a interface Pessoa para incluir a propriedade opcional hobby (string).
// Crie dois objetos Pessoa, um com a propriedade hobby e outro sem.
// Escreva uma função chamada exibirHobby que verifica se o hobby existe e imprime:
// Caso exista: "O hobby de [nome] é [hobby]".
// Caso contrário: "[nome] não informou um hobby".

// Interface Pessoa
interface Pessoa {
  name: string,
  idade: number,
  profissao?: string,
  hobby?: string
};

// Objetos Pessoa
const pessoaOne: Pessoa = {
  name: 'Thalisson',
  idade: 22,
  profissao: 'Suporte Técnico em TI',
  hobby: 'Videogames'
};

const pessoaTwo: Pessoa = {
  name: 'Shaiane',
  idade: 21,
  profissao: 'Empreendedora'
};

// Função que exibe o hobby da pessoa
const exibirHobby = (pessoa: Pessoa): void => {
  if (pessoa.hobby) {
    console.log(`O hobby de ${pessoa.name} é ${pessoa.hobby}.`);
  } else {
    console.log(`${pessoa.name} não informou um hobby.`);
  };
};

// Testes
exibirHobby(pessoaOne);
exibirHobby(pessoaTwo);