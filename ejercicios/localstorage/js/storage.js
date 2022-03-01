const btnGuardar = document.getElementById('btnGuardar');
const btnRecuperar = document.getElementById('btnRecuperar');

btnGuardar.addEventListener('click', () => {
    localStorage.setItem('nombre', 'Julian Castillo');
    const animales = ['perro', 'gato', 'papagayo']
    localStorage.setItem('animales', JSON.stringify(animales));
});

btnRecuperar.addEventListener('click', () => {
    const nombre = localStorage.getItem('nombre', 'Julian Castillo');
    alert(nombre);
    const arr = JSON.parse(localStorage.getItem('animales'));
    alert(arr)

});