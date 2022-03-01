// crear persona con nombre apellidos y edad

class Persona {
    constructor(pNombre, pApellidos, pEdad) {
        this._nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
    }
    get nombre() {
        // validaciones,transformaciones antes de devolver el valor nombre
        return this._nombre;
    }
    set nombre(newValue) {
        //modifica el valor
        this._nombre = newValue;

    }
    // metodo mostrar que devuelve un string

    mostrar() {
        return `hola me llamo${this.edad}años ${this.apellidos} y tengo ${this.edad}`;
    }

}

class Adulto extends Persona {

    constructor(pNombre, pApellidos, pEdad, pTrabajo) {
        super(pNombre, pApellidos, pEdad);
        this.trabajo = pTrabajo;

    }

}
class Infante extends Persona {
    constructor(pNombre, pApellidos, pEdad, pColegio) {
        super(pNombre, pApellidos, pEdad);
        this.colegio = pColegio;

    }

}

const pers1 = new Persona('Mario', 'Giron', '29');
const pers2 = new Persona('Laura', 'Gomez', '34');

console.log(pers1.mostrar());
//console.log(pers2.mostrar());

const adulto1 = new Adulto('Ines', 'Lopez', 56, true);
console.log(adulto1.mostrar());

const infante1 = new Infante('lorenzo', 'Ramirez', 8, 'colegioMercedarias')
console.log(infante1.mostrar());