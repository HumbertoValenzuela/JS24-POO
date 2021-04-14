// 1. Definiendo e Instanciando una clase

// En JS las clases es una mejora en la sintaxis del Object Constructor
// al final termina un object constructor, y los métodos de una
// clase termina siendo en un prototype


// 1 Declarar: Class declaration
class Cliente {
// 3 Caundo creabamos Object constructor, cuando creabamos una nueva instancia le pasabamos los valores de inicio que eran el constructor.
//  En java o Csharp el constructor tiene el mismo nombre de la clase.
// En JS se utiliza el metodo de constructor 
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

// 2 Instanciar
const hrvg = new Cliente('Humberto' , '400000');
console.log(hrvg);

// Declarar: class Expresssion
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}
const hrvg2 = new Cliente2('Humberto' , '400000');
console.log(hrvg2)