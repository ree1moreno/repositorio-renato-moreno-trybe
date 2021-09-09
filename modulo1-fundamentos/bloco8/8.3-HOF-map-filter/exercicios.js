// Instruções para realização dos exercícios
// Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros, contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.
// Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm um código base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício, completando a função em branco.
// Por exemplo, o exercício 1 deve ser salvo no arquivo exercise1.js , e assim por diante. Em cada exercício existe uma ou mais chamadas de funções do módulo assert . Estas funções checarão automaticamente se seu código retorna o resultado esperado.
// Sua solução só será considerada correta se todos os asserts do arquivo forem executados sem erros. No Visual Studio Code , você pode executar o código do exemplo clicando com o botão direito e escolhando a opção Run Code .
// Quando todos os asserts passam, isto é, nenhum deles encontra um resultado diferente esperado, nada de diferente do normal é reportado:

const assert = require('assert');

function foo() {
  return 'bar';
}

assert.strictEqual(foo(), 'bar');

// [Running] node "/Users/leandro/example.js"

// [Done] exited with code=0 in 0.087 seconds

// Quando algum assert falha, é exibido, entre outras coisas, a linha onde o erro aconteceu e sua causa:

const assert = require('assert');

function foo() {
  return 'bar';
}

assert.strictEqual(foo(), 'baz');

// [Running] node "/Users/leandro/example.js"
// assert.js:92
//   throw new AssertionError(obj);
//   ^

// AssertionError [ERR_ASSERTION]: 'bar' == 'baz'
//     at Object.<anonymous> (/Users/leandro/example.js:7:8)
//     at Module._compile (internal/modules/cjs/loader.js:956:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
//     at Module.load (internal/modules/cjs/loader.js:812:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:724:14)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:1025:10)
//     at internal/main/run_main_module.js:17:11 {
//   generatedMessage: true,
//   code: 'ERR_ASSERTION',
//   actual: 'bar',
//   expected: 'baz',
//   operator: '=='
// }

// [Done] exited with code=1 in 0.075 seconds

// Atente para a linha que diz por que a execução falhou: AssertionError [ERR_ASSERTION]: 'bar' == 'baz' . Isso significa que o resultado da função foo ( bar ) é diferente do esperado ( baz ).