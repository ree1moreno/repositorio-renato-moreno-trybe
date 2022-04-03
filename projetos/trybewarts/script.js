function verificaLogin() {
  const inputEmail = document.getElementById('email');
  const inputSenha = document.getElementById('senha');
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

const botaoEntrar = document.getElementById('botao-entrar');
botaoEntrar.addEventListener('click', verificaLogin);

const botaoEnviar = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

function botaoCheck(event) {
  if (event.target.checked === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

checkbox.addEventListener('click', botaoCheck);

const comentario = document.getElementById('textarea');
const contador = document.getElementById('counter');
// console.log(comentario.maxLength);
// console.log(comentario.value);
// console.log(comentario.length);
// console.log(comentario.value.length);
// console.log(typeof comentario.maxLength);
// console.log(typeof comentario.value);
// console.log(typeof comentario.length);

function contarCaracteres() {
  contador.innerText = comentario.maxLength - comentario.value.length;
}

comentario.addEventListener('keyup', contarCaracteres);

// const nome = document.getElementById('input-name');
// console.log(nome.value);
// const sobrenome = document.getElementById('input-lastname');
// const email = document.getElementById('input-email');
// const casa = document.getElementById('house');
// const familia = document.getElementById('label-family');
// const materias = document.getElementById('label-content');
// const avaliacao = document.getElementById('label-rate');
// const observacao = document.getElementById('textarea');

// function pegarInfos() {}

// botaoEnviar.addEventListener('click', pegarInfos);
