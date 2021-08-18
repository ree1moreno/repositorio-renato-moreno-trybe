// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
  
  // Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
  // Valor esperado no retorno da função: Fernanda .

  function maiorTamanhoDoNome(nomes) {
    let maiorNome = nomes[0];
    for (indice in nomes) {
      if (maiorNome.length < nomes[indice].length) {
      maiorNome = nomes[indice];
      }
    }
    return maiorNome;
  }

  console.log(maiorTamanhoDoNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
