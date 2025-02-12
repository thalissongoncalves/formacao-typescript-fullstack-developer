export {};
// Exercício 1: Criação de Interface
// Crie uma interface chamada Livro com as seguintes propriedades:
// titulo (string): título do livro.
// autor (string): nome do autor.
// anoPublicacao (number): ano de publicação.
// genero (string): gênero literário.
// resumo? (string): um resumo opcional do livro.
interface Livro {
  titulo: string,
  autor: string,
  anoPublicacao: number,
  genero: string,
  resumo?: string
};
// Em seguida, crie dois objetos que representem livros, baseando-se na interface Livro.
const bookOne: Livro = {
  titulo: 'Harry Potter e a Pedra Filosofal',
  autor: 'J. K. Rowling',
  anoPublicacao: 1997,
  genero: 'Alta fantasia',
};

const bookTwo: Livro = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'J. K. Rowling',
  anoPublicacao: 1999,
  genero: 'Literatura Fantástica',
  resumo: 'O livro conta sobre o terceiro ano de Harry Potter na Escola de Magia e Bruxaria de Hogwarts. Sem a aparição de Voldemort, a trama apresenta um novo perigo para o personagem principal: Sirius Black, que teria assassinado treze pessoas com um único feitiço, fugiu da prisão de Azkaban e estaria agora o perseguindo para matá-lo. O garoto, junto com seus dois amigos, Rony e Hermione, começam a investigar o suposto assassino e acabam descobrindo muitos segredos que envolvem sua já falecida família.'
};
// Crie um array chamado biblioteca contendo os dois livros.
const biblioteca: Livro[] = [
  bookOne,
  bookTwo
]