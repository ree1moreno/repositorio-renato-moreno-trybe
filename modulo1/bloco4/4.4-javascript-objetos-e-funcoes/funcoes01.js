// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

  // Exemplo de palíndromo: arara .
  // verificaPalindrome('arara') ;
  // Retorno esperado: true
  // verificaPalindrome('desenvolvimento') ;
  // Retorno esperado: false

  function verificaPalindrome(string) {
    for (index in string) {
      if (string[index] != string[(string.length -1) - index]) {
      return false;
      }
    }
    return true;
  }

  console.log(verificaPalindrome('arara'));
  console.log(verificaPalindrome('desenvolvimento'));