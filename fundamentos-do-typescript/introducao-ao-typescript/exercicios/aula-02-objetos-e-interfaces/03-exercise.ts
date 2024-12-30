export {};
// Exercício 3: Funções com Interfaces
// Dada a interface Aluno:
interface Aluno {
  nome: string;
  idade: number;
  curso: string;
}
// Crie uma função chamada criarAluno que receba como parâmetros os valores para nome, idade e curso, e retorne um objeto do tipo Aluno.
const criarAluno = (nome: string, idade: number, curso: string): Aluno => {
  return { nome, idade, curso };
};
// Teste a função criando três objetos Aluno e adicionando-os a um array chamado alunos.
const alunos: Aluno[] = [
  criarAluno('Thalisson', 22, 'Análise e Desenvolvimento de Sistemas'),
  criarAluno('Shaiane', 21, 'Moda'),
  criarAluno('Kamily', 18, 'Técnico em Recursos Humanos')
];
console.log(alunos)