// 4. Propiedades Privadas en JavaScript

// Existen atributos privados, públicos, protected
// Público acceso dentro de la clase o en el objeto
// Private se puede acceder al atributo dentro de la clase
//  un atributo privado es #nombre

class Cliente { 
    // private
    #nombre
    #apellido
    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }
   
    mostrarInformacion() {       
        return `Cliente: ${this.#nombre}, saldo: ${this.saldo}`;
    }

    // Métodos estaticos
    static bienvenida() {
        return `Bienvenido al Cajero`
    }

    // al llamar a apellido
    setApellido(apellido) {
        this.#apellido = apellido;        
    }

    getApellido() {
        return this.#apellido;
    }
}

//  Instanciar Cliente
const hrvg = new Cliente('Humberto' , 400000);
// Accede a una propiedad desde el objeto 

//console.log(hrvg.#nombre);
// esta privado y da mensaje de error
//  Private field '#nombre' must be declared in an enclosing class

// Private se puede acceder al atributo dentro de la clase
console.log(hrvg.mostrarInformacion());

// Accedemos del método setApellido al atributo privado #apellido
hrvg.setApellido('Valenzuela');
// luego mostrar el atributo privado desde el método
console.log(hrvg.getApellido());

// NO podrás acceder a #apellido de esta manera
// console.log(hrvg.#apellido);
