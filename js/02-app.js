// 2. Métodos y Métodos estaticos en las classes

// Dentro de una clase una función es llamada método.

// Agregar métodos a nuestras clases, básicamente termina siendo como el prototype, es decir, funciones que son específicas
// para los objetos que se crean con esta clase

// Entonces ir a chrome y observa el _proto, se observa que el método
// mostrarInformacion se encuentra en el prototype.

// Si comparamos la sintaxis con el Cap 22, 23 de los prototypes y creando un método de esta forma.
// Esta es una de las mejoras de las clases, es decir, es mejor crear métodos que prototypes

class Cliente { 
        constructor(nombre, saldo) {
            this.nombre = nombre;
            this.saldo = saldo;
        }
        // Método Normal
        mostrarInformacion() {
            // this. para referirse al objeto actual
            return `Cliente: ${this.nombre}, saldo: ${this.saldo}`;
        }

        // Métodos estaticos
        static bienvenida() {
            return `Bienvenido al Cajero`
        }
// Diferencia entre método y método estatico
// Las estaticas no requieren una instancia
}
  
// 2 Instanciar
const hrvg = new Cliente('Humberto' , '400000');
console.log(hrvg);

// ¿Cómo utilizar el método de Cliente?
console.log(hrvg.mostrarInformacion());

// Llamar un método estatico, no requiere instancia
console.log(Cliente.bienvenida());
// error al llamar de una instancia
console.log(hrvg.bienvenida());// hrvg.bienvenida is not a function
// Esto pasa porque bienvenida pertene a la Clase y no
// al objeto. De hecho si revisamos en Chrome _proto
// se observa que no aparece bienvenida