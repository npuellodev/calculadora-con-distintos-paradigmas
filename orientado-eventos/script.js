const display = document.getElementById('display');
const botonesContainer = document.querySelector('.grid');

let primerNumero = null;
let operadorPendiente = null;
let iniciarNuevoNumero = false;

display.value = '0';

botonesContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const valorBoton = event.target.textContent;

        // Manejo de números y punto decimal
        if (esNumeroOPunto(valorBoton)) {
            if (valorBoton === '.' && display.value.includes('.')) {
                return;
            }
            // Verifica si debemos iniciar un nuevo número O si el display muestra solo un cero
            if (iniciarNuevoNumero || display.value === '0') {
              // Si el botón presionado es un punto decimal, mostramos "0."
              // Si no, mostramos el número presionado
                display.value = valorBoton === '.' ? '0.' : valorBoton;
                // Indicamos que ya no necesitamos iniciar un nuevo número
                iniciarNuevoNumero = false;
            } else {
              // Si no es un nuevo número, simplemente agregamos el dígito al final
              // Por ejemplo: si el display muestra "1" y presionamos "2", quedará "12"
                display.value += valorBoton;
            }
        }

        // Manejo de operadores
        if (esOperador(valorBoton)) {
            if (primerNumero === null) {
                primerNumero = parseFloat(display.value);
            } else if (!iniciarNuevoNumero) {
                calcularResultado();
            }
            operadorPendiente = valorBoton;
            iniciarNuevoNumero = true;
        }

        // Manejo del igual
        if (valorBoton === '=') {
            calcularResultado();
            primerNumero = null;
            operadorPendiente = null;
            iniciarNuevoNumero = true;
        }

        // Manejo del clear
        if (valorBoton === 'C') {
            display.value = '0';
            primerNumero = null;
            operadorPendiente = null;
            iniciarNuevoNumero = false;
        }
    }
});

function esNumeroOPunto(valor) {
    return !isNaN(valor) || valor === '.';
}

function esOperador(valor) {
    return ['+', '-', '×', '÷'].includes(valor);
}

function calcularResultado() {
    if (primerNumero === null || operadorPendiente === null) return;

    const segundoNumero = parseFloat(display.value);
    let resultado;

    switch (operadorPendiente) {
        case '+':
            resultado = primerNumero + segundoNumero;
            break;
        case '-':
            resultado = primerNumero - segundoNumero;
            break;
        case '×':
            resultado = primerNumero * segundoNumero;
            break;
        case '÷':
            resultado = segundoNumero !== 0 ? primerNumero / segundoNumero : 'Error';
            break;
    }

    display.value = resultado;
    primerNumero = resultado;
}

