const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const adicionaManha = (objeto, chave, valor) => objeto[chave] = valor;

adicionaManha(lesson2, 'turno', 'manhã');
console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listaChaves = (objeto) => Object.keys(objeto);
console.log(listaChaves(lesson1));
console.log(listaChaves(lesson2));
console.log(listaChaves(lesson3));

// 3. Crie uma função para mostrar o tamanho de um objeto.
const tamanhoObjeto = (objeto) => Object.keys(objeto).length;

console.log(`O tamanho do objeto é: ${tamanhoObjeto(lesson1)}.`);
console.log(`O tamanho do objeto é: ${tamanhoObjeto(lesson2)}.`);
console.log(`O tamanho do objeto é: ${tamanhoObjeto(lesson3)}.`);

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listarValores = (objeto) => Object.values(objeto);

console.log(listarValores(lesson1));
console.log(listarValores(lesson2));
console.log(listarValores(lesson3));

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
// 8.Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 