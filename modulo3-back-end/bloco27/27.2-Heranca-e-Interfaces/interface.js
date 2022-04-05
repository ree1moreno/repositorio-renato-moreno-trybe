var Bird2 = /** @class */ (function () {
    function Bird2(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    Object.defineProperty(Bird2.prototype, "age", {
        get: function () {
            var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
            return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        },
        enumerable: false,
        configurable: true
    });
    Bird2.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    Bird2.prototype.fly = function () {
        console.log("".concat(this.name, " est\u00E1 voando!"));
    };
    return Bird2;
}());
var parrot2 = new Bird2('Papagaio', new Date(Date.parse('Aug 16, 2015')));
console.log(parrot2.age);
parrot2.fly();
/*
Saída (código executado em Mar/2022):

Papagaio está voando!
*/
