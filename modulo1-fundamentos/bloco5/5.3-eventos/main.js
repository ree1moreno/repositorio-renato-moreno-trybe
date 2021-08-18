const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*
1. Copie esse arquivo e edite apenas ele;
2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?
5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/
function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);


// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

//Exercício 2
function classeTech (mudar) {
  let addTech = document.querySelector ('.tech');
  addTech.classList.remove('tech');
  mudar.target.classList.add ('tech');
}

firstLi.addEventListener('click', classeTech);
secondLi.addEventListener('click', classeTech);
thirdLi.addEventListener('click', classeTech);

//Exercício 3
input.addEventListener ('input', function(texto) {
  let addTexto = document.querySelector ('.tech');
  addTexto.innerHTML = texto.target.value;
})

//Exercício 4
myWebpage.addEventListener('dblclick', function() {
  window.open ('https://github.com/ree1moreno', '_blank');
})

//Exercício 5
myWebpage.addEventListener ('mouseover', function() {
  myWebpage.style.color = 'black';
})
myWebpage.addEventListener ('mouseleave', function() {
  myWebpage.style.color = 'white';
})


















function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);