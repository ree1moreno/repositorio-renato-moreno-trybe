var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    /*
      Ao invés de declarar os atributos antes do construtor, receber parâmetros
      no construtor e colocá-los nos atributos da classe, se não formos
      validar, podemos utilizar uma forma simplificada de escrita, simplesmente
      colocando o modificador de visibilidade na frente
      do nome do parâmetro no construtor
  
      Exemplo
      O seguinte código:
  
      public x: number
      constructor(x: number) { this.x = x }
  
      Pode ser substituído por:
  
      constructor(public x: number) { }
    */
    // constructor(public name: string, private birthDate: Date) {}
    function Animal(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    Object.defineProperty(Animal.prototype, "age", {
        get: function () {
            /*Para operar com datas, vamos operar somente com milisegundos. Uma data
            é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
            var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
            /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
            Tente entender a lógica abaixo: como converter de milisegundos para anos?*/
            return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mammal.prototype.walk = function () {
        console.log("".concat(this.name, " est\u00E1 andando!"));
    };
    return Mammal;
}(Animal));
var tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2020')));
var main = function (animal) {
    console.log(animal.age);
};
main(tiger);
tiger.walk();
/*
Saída (código rodado em Mar/2022):

Tigre está andando!
*/
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " est\u00E1 voando!"));
    };
    Bird.prototype.showBirthDate = function () {
        console.log(this.birthDate); // ERRO! birthDate é privado e não é visível pra subclasse Bird.
    };
    return Bird;
}(Animal));
var parrot = new Bird('Papagaio', new Date(Date.parse('Jun 07, 2017')));
console.log(parrot.age);
parrot.fly();
parrot.showBirthDate();
/*
Saída (código executado em Mar/2022):

Papagaio está voando!
*/
