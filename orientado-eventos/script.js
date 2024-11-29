// obtenemos el display y el contenedor de botones
const display = document.getElementById('display');
const buttons = document.querySelector('.grid');

display.value = '0';

// agregamos un solo event listener a todos los botones
buttons.addEventListener('click', (event) => {
  //verificamos si el click fgue en un botón
  if (event.target.tagName === 'BUTTON') {
    // obtenemos el valor del botón
    const value = event.target.textContent;
    console.log('Boton presionado:', value);
        // Si el display muestra '0', lo reemplazamos con el nuevo número
        // sino, agregamos el número al final
        if (display.value === '0') {
          display.value = value;
      } else {
          display.value += value;
      }

      // Manejo especial para el botón 'C' (clear)
      if (value === 'C') {
          display.value = '0';
      }
  }
});

