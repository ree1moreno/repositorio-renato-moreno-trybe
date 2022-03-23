// Imagine que você tem um campo em um banco de dados externo que representa o status da matrícula de uma pessoa estudante em um curso, chamado StudentStatus que é do tipo inteiro e pode conter os números 1, 2 ou 3, que representam respectivamente: Active , Inactive e Paused.
// Vamos criar uma enumeração com esses valores e entendermos como eles funcionam no TypeScript.

enum StudentStatus {
  Active,
  Inactive,
  Paused,
}

// Agora vamos declarar uma variável para uma nova pessoa estudante do tipo StudentStatus e atribuir o tipo Inactive.
let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1

// Opa, mas não tivemos a saída esperada não é mesmo? Por padrão uma enum é baseada em números , os valores começam de zero e para cada opção é assinalado um número incrementado por 1 , assim como os índices de um array. Portanto Active é 0, Inactive é 1 e Paused é 2.

enum StudentStatus2 {
  Active = 1,
  Inactive,
  Paused,
}

let newStudentStatus2: StudentStatus2 = StudentStatus2.Inactive;
console.log(newStudentStatus2); //saída: 2

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes['OK'];
const stringBadRequest = StatusCodes[400];

console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest

enum directionsGamePad {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGTH = 'RIGHT',
}

// Exercícios
// Crie uma Enum que represente os dias da semana . Seu valor deve ser número do dia.
enum diasDaSemana {
  Domingo = 1,
  SegundaFeira,
  TercaFeira,
  QuartaFeira,
  QuintaFeira,
  SextaFeira,
  Sabado,
}

// Crie uma Enum que represente as cores do arco iris . Seu valor deve ser o nome das cores em português.
enum coresDoArcoIris {
  Vermelho,
  Laranja,
  Amarelo,
  Verde,
  Azul,
  Anil,
  Violeta,
}

// Crie uma Enum que represente as ações: salvar , imprimir , abrir , visualizar e fechar . Seu valor deve ser do tipo inteiro.
enum acoes {
  Salvar,
  Imprimir,
  Abrir,
  Visualizar,
  Fechar,
}

// Crie uma Enum que represente os pontos cardeais: Norte , Leste , Sul e Oeste . Seu valor deve ser a primeira letra do nome do ponto cardial.
enum pontosCardeais {
  Norte = 'N',
  Sul = 'S',
  Leste = 'L',
  Oeste = 'O',
}
