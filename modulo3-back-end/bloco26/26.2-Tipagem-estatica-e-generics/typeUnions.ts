// Exemplo:
// A função abaixo pode receber tanto um número
// quanto uma string.
function retornarCPF(cpf: number | string) {
  console.log('Seu CPF é: ' + cpf);
}

// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
type EstadosFisicos = 'sólido' | 'líquido' | 'gasoso';

// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
type Documento = string | number;

// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.

type Sistema = 'linux' | 'mac os' | 'windows';

// Crie um type union que represente as vogais do alfabeto.
type Vogais = 'a' | 'e' | 'i' | 'o' | 'u';
