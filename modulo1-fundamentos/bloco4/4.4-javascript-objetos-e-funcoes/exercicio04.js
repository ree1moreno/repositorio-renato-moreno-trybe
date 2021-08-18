let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim';

// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for (valor in info) {
  console.log(info[valor]);
}