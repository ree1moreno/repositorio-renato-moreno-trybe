var Person = /** @class */ (function () {
    function Person(name, height, weight, age) {
        this.name = name;
        this._weight = weight;
        this._age = age;
        this.height = height;
    }
    Person.prototype.getWeight = function () {
        return this._weight;
    };
    Object.defineProperty(Person.prototype, "age", {
        // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
        get: function () {
            return this._age;
        },
        // do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
        set: function (newValue) {
            if (newValue >= 0 && newValue < 200) {
                this._age = newValue;
            }
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.birthday = function () {
        this._age += 1;
    };
    return Person;
}());
var p1 = new Person('Maria', 171, 58, 19);
var p2 = new Person('João', 175, 66, 18);
console.log('p1', p1);
console.log('p2', p2);
// Alteração direta de variável pública
p1.name = 'Mariah';
// Acesso direto a variável pública
console.log(p1.name);
// Acesso a método público que manipula atributo privado
console.log(p1.getWeight());
// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(p2.age);
// Acesso a método público que manipula atributo privado
p2.birthday();
console.log(p2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
p2.age = 17;
console.log(p2.age);
// Leitura de atributo readonly
console.log(p1.height);
p2.age = 300;
console.log(p2.age);
// Saída: 17
// // Agora um exemplo de sintaxes que são inválidas neste contexto:
// // Acesso externo à classe a atributo privado
// p1._weight;
// p1._weight = 1;
// // Acesso a atributo inexistente
// p1.weight;
// p1.weight = 1;
// // Escrita em atributo readonly
// p1.height = 1;
