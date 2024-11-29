class Calculadora {
    constructor() {
        this.ultimoResultado = 0;
    }

    sumar(a, b) {
        this.ultimoResultado = a + b;
        return this.ultimoResultado;
    }

    restar(a, b) {
        this.ultimoResultado = a - b;
        return this.ultimoResultado;
    }

    multiplicar(a, b) {
        this.ultimoResultado = a * b;
        return this.ultimoResultado;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        this.ultimoResultado = a / b;
        return this.ultimoResultado;
    }

    obtenerUltimoResultado() {
        return this.ultimoResultado;
    }
}

// Ejemplo de uso
const calc = new Calculadora();
console.log('Suma: ', calc.sumar(5, 3));
console.log('Resta: ', calc.restar(10, 4));
console.log('Multiplicación: ', calc.multiplicar(4, 2));
console.log('División: ', calc.dividir(15, 3));
