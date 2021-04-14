// 3. Heredar una clase
// Queremos utilizar la clase Cliente para crear otra clase.
//  que herede los atributos(nombre,saldo) y los métodos(mostrarInformacion)

// Si tienes un método padre y un metodo hijo igual, se reescribe, es decir, el hijo queda

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

}

// Herencia
class Empresa extends Cliente { }
//  Instanciar Cliente
const hrvg = new Cliente('Humberto' , '400000');
console.log(hrvg);

// Instanciar Empresa
const empresa = new Empresa('Humberto valenzuela', 500000);
// notar que empresa utiliza el método de Cliente
console.log(empresa.mostrarInformacion());

// Herencia
class Organizacion extends Cliente { 
    // Supongamos que queremos dos atributos más, un teléfono y una categoria
    // entonces vamos a reescribir ese constructor
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    } 
}

const organizacion = new Organizacion('Humberto valenzuela', 500000, 966299793, 'Aprendisaje en Video');
console.log(organizacion);
console.log(organizacion.mostrarInformacion());

