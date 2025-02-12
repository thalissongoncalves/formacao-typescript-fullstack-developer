// Exercício 2: Manipulando Arrays de Objetos
// Dada a interface Carro abaixo:
interface Carro {
  marca: string;
  modelo: string;
  ano: number;
  eletrico?: boolean;
}
// Crie um array chamado carros contendo três objetos Carro com diferentes valores.
const carroOne: Carro = {
  marca: 'Hyundai',
  modelo: 'HB20',
  ano: 2025,
};

const carroTwo: Carro = {
  marca: 'BMW',
  modelo: 'BMW iX M60',
  ano: 2025,
  eletrico: true
};

const carroThree: Carro = {
  marca: 'Volkswagen',
  modelo: 'VW Fusca Sport Beige',
  ano: 2025,
  eletrico: true
};

const carros: Carro[] = [carroOne,carroTwo,carroThree];
// Escreva uma função chamada listarCarros que recebe o array e imprime as informações de cada carro no console no formato:
  // Marca: [marca], Modelo: [modelo], Ano: [ano], Elétrico: [sim/não]
const listarCarros = (car: Array<Carro>) => {
  car.forEach((c) => {
    let isEletric: string = c.eletrico ? "sim" : "não";
    console.log(`Marca: ${c.marca}, Modelo: ${c.modelo}, Ano: ${c.ano}, Elétrico: ${isEletric}`)
  });
};

listarCarros(carros);