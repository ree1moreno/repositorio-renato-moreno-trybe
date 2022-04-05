var Student = /** @class */ (function () {
    function Student(matricula, nome, notasDeProva, notasDeTrabalho) {
        this._matricula = matricula;
        this._nome = nome;
        this._notasDeProva = notasDeProva;
        this._notasDeTrabalho = notasDeTrabalho;
    }
    Object.defineProperty(Student.prototype, "matricula", {
        get: function () {
            return this._matricula;
        },
        set: function (params) {
            this._matricula = params;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (params) {
            this._nome = params;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var estudante1 = new Student('123456', 'Joãozinho', [], []);
console.log(estudante1);
var estudante2 = new Student('123456', 'teste', [], []);
console.log(estudante2);
