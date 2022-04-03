// Exemplo:
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log('O valor da cordenada x é: ' + pt.x);
  console.log('O valor da coordenada y é: ' + pt.y);
}

printCoord({ x: 100, y: 100 });
//saída:
//O valor da cordenada x é: 100
//O valor da cordenada y é: 100

// Crie um type para um objeto que represente um pássaro.
type Passaro = {
  asas: 2;
  bico: 1;
  voa: true;
};

// Crie um type que represente uma função que recebe 2 valores numéricos e retorna a soma dos dois.
type soma = (a: number, b: number) => number;

// Crie um type para um objeto que represente um endereço.
type Endereco = {
  rua: string;
  numero: number;
  cidade: string;
  estado: string;
};
