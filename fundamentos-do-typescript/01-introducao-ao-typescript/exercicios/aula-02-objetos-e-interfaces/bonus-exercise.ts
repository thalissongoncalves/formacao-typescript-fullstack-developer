export {};
// Bônus: Trabalhando com Arrays e Interfaces
// Dada a interface Produto:
// interface Produto {
//     nome: string;
//     preco: number;
//     categoria: string;
// }
// Crie um array chamado produtos contendo cinco produtos diferentes.
// Escreva uma função chamada filtrarPorCategoria que receba o array e uma categoria como parâmetro, e retorne um novo array contendo apenas os produtos daquela categoria.
// Teste a função com diferentes categorias.

// Interface Produto
interface Produto {
  nome: string,
  preco: number,
  categoria: string
};

// Objetos produtos
const produtos: Produto[] = [
  {nome: 'Cropped Top Feminino Formato Coração', preco: 24.99, categoria: 'cropped'},
  {nome: 'Cropped Top Feminino Cortininha Elegante com Babados', preco: 34, categoria: 'cropped'},
  {nome: 'Vestido Curto Feminino de Alcinha - Malha Canelada', preco: 27.71, categoria: 'vestido'},
  {nome: 'Vestido Curto Entrelaçado Gola Alta Manga Longa Moda Feminina Elegante', preco: 35, categoria: 'vestido'},
  {nome: 'Vestido Longo Tomara que Caia Malha Canelada Moda Feminina Elegante', preco: 35, categoria: 'vestido'}
];

// Função que filtra por categoria
const filtrarPorCategoria = (produtos: Produto[], categoria: string): Produto[] | string => {
  const filtrados: Produto[] = produtos.filter((produto) => produto.categoria === categoria);
  if (filtrados.length === 0) {
    return `Nenhum produto encontrado na categoria: ${categoria}`;
  };
  return filtrados;
};

// Testes
console.log(filtrarPorCategoria(produtos, 'cropped'))
console.log(filtrarPorCategoria(produtos, 'vestido'))
console.log(filtrarPorCategoria(produtos, 'blusa'))