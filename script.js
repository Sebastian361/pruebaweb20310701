document.addEventListener('DOMContentLoaded', () => {
    const botonHorizontal = document.getElementById('botonHorizontal');
    const botonVertical = document.getElementById('botonVertical');
    const vistaPreviaPoster = document.getElementById('vistaPreviaPoster');

    botonHorizontal.addEventListener('click', () => {
        vistaPreviaPoster.classList.add('horizontal');
        vistaPreviaPoster.classList.remove('vertical');
        botonHorizontal.classList.add('seleccionado');
        botonVertical.classList.remove('seleccionado');
    });

    botonVertical.addEventListener('click', () => {
        vistaPreviaPoster.classList.add('vertical');
        vistaPreviaPoster.classList.remove('horizontal');
        botonVertical.classList.add('seleccionado');
        botonHorizontal.classList.remove('seleccionado');
    });
});