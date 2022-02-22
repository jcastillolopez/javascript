// recuperar evento input//

const inputText = document.getElementById('inputTexto');
const labelTexto = document.getElementById('labelTexto');
//inputText.addEventListener('input', recuperaTexto);

const recuperaTexto = (event) => {
    console.log(event.target.value);
    labelTexto.innerText = event.target.value;
    labelTexto.style.border = '3px solid red';
}
inputText.addEventListener('input', recuperaTexto);

// capturar el eevento change sobre un select


const selectPaises = document.getElementById('selectPaises');
const paisSeleccionado = document.getElementById('paisSeleccionado');

const cambiaPais = (event) => {
    console.log(event.target.value);
    paisSeleccionado.innerText = event.target.value;
}
selectPaises.addEventListener('change', cambiaPais);

//capturar el valor de un campo texto cuando haga click en un boton

const inputMensaje = document.getElementById('inputMensaje');
const btn = document.getElementById('btn');

const pulsarBoton = (Event) => {
    console.log(inputMensaje.value);
}

btn.addEventListener('click', (Event) => {
    console.log(inputMensaje.value);
});

//



