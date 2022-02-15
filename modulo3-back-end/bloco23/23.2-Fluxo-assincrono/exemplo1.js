// const p = new Promise((resolve, reject) => {
//   // Aqui é onde vamos realizar a lógica que precisamos
//   // para "tentar cumprir" a promessa
// });

const fs = require('fs');

  function readFilePromise (fileName) {
    return new Promise((resolve, reject) => {

      fs.readFile(fileName, (err, content) => {
        if (err) return reject(err);
        resolve(content);
      });

    });
  }

// 1º - Recebemos, como parâmetro, o nome do arquivo que queremos ler, fileName na função readFilePromise(fileName) ;
// 2º - Criamos e retornamos uma nova Promise, Promise((resolve, reject) => {} ;
// 3º - Chamamos o módulo nativo do node, fs , para realizar a leitura desse arquivo, fs.readFile(fileName, (err, content) => {}) ;
// 4º - Dentro da callback fs.readFile(fileName, (err, content) => {}) que passamos para a função readFile , verificamos se ocorreu um erro ( if (err) ). Se sim, rejeitamos a Promise e encerramos a execução - reject(err) ;
// 5º Caso não tenha acontecido nenhum erro, resolvemos a Promise com o resultado da leitura do arquivo - resolve(content).

// ...

readFilePromise('./file.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso ela cumpra o que prometeu
    console.log(`Lido arquivo com ${content.byteLength} bytes`); // Escrevo o resultado no console
  })
  .catch((err) => { // Caso ela não cumpra o que prometeu
    console.error(`Erro ao ler arquivo: ${err.message}`); // Escrevo o erro no console
  });