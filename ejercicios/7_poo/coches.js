class Coche {
    // necesitan  metodo constructor->  indica como se genera los objetos de esta clase

    constructor(pMarca, pModelo, pColor) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.color = pColor;
        this.velocidad = 0;


    }
    acelerar(pIncremento) {
        this.velocidad += pIncremento;
    }
    frenar(pDecremento) {
        this.frenar -= pDecremento;

    }

}
const coche1 = new Coche('mercedes', 'Gle 350 4matic', 'gris');
const coche2 = new Coche('seat', 'alhambra 140 sport', 'azul');

console.log(coche1);
coche1.acelerar(56);
console.log(coche1);
coche1.acelerar(23)
console.log(coche1);
//console.log(coche2);