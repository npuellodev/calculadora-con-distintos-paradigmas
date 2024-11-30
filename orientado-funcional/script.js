// Operaciones básicas
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: división por cero';

// Función principal de cálculo
/**
 *
 * @param {*} num1 este es el primer número de la operacion
 * @param {*} num2 este es el segundo número de la operación
 * @param {*} operacion este es la operación a realizar
 * @returns  devuelve la llamada de la operacion: operaciones[operacion](num1, num2); = suma(num1, num2)
 */
const calcular = (num1, num2, operacion) => {
    const operaciones = {
        suma: sumar,
        resta: restar,
        multiplicacion: multiplicar,
        division: dividir
    };

    return operaciones[operacion](num1, num2);
};

console.log('=== Calculadora Simple ===');
console.log('Suma:', calcular(5, 3, 'suma'));
console.log('Resta:', calcular(10, 4, 'resta'));
console.log('Multiplicación:', calcular(6, 2, 'multiplicacion'));
console.log('División:', calcular(15, 3, 'division'));
