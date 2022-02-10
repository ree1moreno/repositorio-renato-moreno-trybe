function sum(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Informe apenas números');
    
    const resultado = (a + b) * c;

    if (resultado < 50) {
      return reject('Valor muito baixo');
    }

    resolve(resultado);
  });
}

sum(10, 20, 30)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

sum(1, 2, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

sum(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))