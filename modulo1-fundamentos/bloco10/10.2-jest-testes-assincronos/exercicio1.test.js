const uppercase = require('./exercicio1');

test('verifica se transforma as letras para maiúsculas', (done) => {
  uppercase('string', str => {
    try {
      expect(str).toBe('STRING');
      done();
    } catch (error){
      done(error);
    }
  });
});
