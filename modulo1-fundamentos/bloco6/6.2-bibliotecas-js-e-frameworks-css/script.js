
function criarEstados() {
  const arrayEstados = ['Selecione seu estado','Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
  
  for (let index = 0; index < arrayEstados.length; index += 1) {
    let estado = arrayEstados[index];
    let opcao = document.createElement('option');
    opcao.value = estado;
    opcao.innerText = estado;
    let selecao = document.querySelector('#estados');
    selecao.appendChild(opcao);
  }
  
}

window.onload = function () {
criarEstados();

};


