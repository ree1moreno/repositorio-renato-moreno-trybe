function calcularDivisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error('Não pode ser feito uma divisão por zero'));

    const resultado = num1 / num2;

    resolve(resultado);
  });

  return promise;
}

calcularDivisao(2, 1)
  .then((result) => console.log(`resultado: ${result}`))
  .catch((err) => console.log(`erro: ${err.message}`));