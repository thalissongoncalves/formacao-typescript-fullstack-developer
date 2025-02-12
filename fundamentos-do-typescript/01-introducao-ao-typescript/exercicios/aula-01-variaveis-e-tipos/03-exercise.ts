export {};
// Exercício 3: Inferência de Tipos
// Explique o que acontecerá ao executar o seguinte código (e corrija se necessário):
// let idade = 30;  // Qual é o tipo inferido?
// idade = "trinta";  // Isso funciona?
let idade: string | number = 30; // O tipo inferido é number
idade = 'trinta'; // Não funciona, pois o tipo da variável idade é number, teria que especificar o tipo da variavel idade para ''string | number''