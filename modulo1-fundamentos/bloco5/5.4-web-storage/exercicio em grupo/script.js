window.onload = function() {
  let basePyramid = 9; //define o tamanho da base
  let numberOfLines = (basePyramid + 1) / 2; // 5 -> encontra o meio da piramide
  let controlLeft = numberOfLines; // 5 -> recebe o numero do meio
  let controlRight = numberOfLines; // 5 -> recebe o numero do meio
  let lines = document.querySelectorAll(".line"); // seleciona todos elementos da classe 'line'

  updateVisit(); //chama a funcao de contagem de visita

  fillTriangle(lines); // função que preenche a piramide
  
  // Atualiza a quantidade de visitar no site, utilizando o LocalStorage
  function updateVisit() {
    if (typeof (Storage) != "undefined") { //verifica se é compativel com o WebStorage
      if(localStorage.count !== undefined) { //garante que o localStorge.count exista
        let count = parseInt(localStorage.count); //cria variavel e transforma em inteiro o resultado do 'localStorage.count'
        count+=1; //soma +1 para cada visita
        localStorage.count = count; //atribui o valor inteiro para o contador
        document.getElementById("count").innerHTML = count; //seleciona o span com id 'count' e adiciona um valor
      } else {
        localStorage.count = 1; //coloca o valor de 1 para a primeira vez que abre a página
        document.getElementById("count").innerHTML = 1;
      }
    } else {
      document.write("Sem suporte para Web Storage"); //apresenta mensagem caso o navegador não seja compativel ao WebStorage
    }  
  }

  // Passa por todos as linhas (div com class line) e preenche o triangulo
  function fillTriangle(lines) {
    for(let index = 0; index < lines.length; index += 1) { //percorre todos os elementos do lines
      fillLine(lines[index]); //chama a funcao fillLine com o parametro da posicao de cada linha
      controlRight += 1; //adiciona um pra direita
      controlLeft -= 1; //diminui um pra esquerda
    }
  }

  // Cria uma caixa com base nas diferentes classes
  function createBox(className) { 
    let box = document.createElement("div"); //cria um elemento 'div'
    box.className = className; // da uma classe para a variavel box
    return box;
  }

  // Preenche uma linha
  function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
      if(lineColumn >= controlLeft && lineColumn <= controlRight) {
        let box = createBox("box");
        divLine.appendChild(box);
      } else {
        divLine.appendChild(createBox("box-empty"));
      }
    }
  }
}
