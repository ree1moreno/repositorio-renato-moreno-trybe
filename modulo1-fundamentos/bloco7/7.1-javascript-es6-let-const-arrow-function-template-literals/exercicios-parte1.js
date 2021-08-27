// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.

function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} +  ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);


// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.


// https://www.youtube.com/watch?v=N4G7XtU75kU
// https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
// https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a#:~:text=Para%20classificar%20um%20array%20de,scores%20numericamente%20em%20ordem%20crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2,];

// Seu código aqui.
// oddsAndEvens.sort(compareFunction);
// 1. Se compare(a, b) for menor que zero, o método sort() classifica a para um índice menor que b. Ou seja, o a virá antes de b.
// 2. Se compare(a, b) for maior que zero, o método sort() classificará b com um índice menor que a, ou seja, b virá primeiro.
// 3. Se compare(a, b) retornar zero, o método sort() considera a igual a b e deixa suas posições inalteradas.

const numeros = oddsAndEvens.sort((num1,num2) => num1 - num2);

console.log(`Os números ${numeros} se encontram ordenados de forma crescente`); // será necessário alterar essa linha 😉
