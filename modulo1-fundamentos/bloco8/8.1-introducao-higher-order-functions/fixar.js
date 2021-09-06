// 1 - Crie uma função que retorne a string 'Acordando!!' ;
const acordar = () => 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
const tomarCafe = () => 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const dormir = () => 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
const doingThings = (acao) => {
  const atividade = acao();
  console.log(atividade)
};
// Ao chamar a função doingThings:
doingThings(acordar);
doingThings(tomarCafe);
doingThings(dormir);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!