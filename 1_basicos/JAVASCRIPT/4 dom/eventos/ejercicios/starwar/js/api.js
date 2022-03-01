// async - await 
// 1 - Colocar la palabra await delante de la ejecución de la promesa
// 2 - Colocar la palabra async delante de la función donde estamos ejecutando la promesa
// 3 - El valor que recibimos en then ahora lo recibimos como una variable al ejecutar la promesa

// const ulPersonajes = document.getElementById('personajes');
const ulPersonajes = document.querySelector('#personajes');
const infopersonaje = document.getElementById('infoPersonaje');
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

printMenu();
//listenner a los botones + y -
btnAnterior.addEventListener('click', cambioPagina);
btnSiguiente.addEventListener('click', cambioPagina);


async function getDataMenu(page = 1) {
    const response = await fetch(`https://swapi.dev/api/people/?format=json&page${page}`);
    const json = await response.json();
    //  console.log(json.results);
    console.log(json.next)
    btnAnterior.dataset.url = json.previous;
    btnSiguiente.dataset.url = json.next;
    //ocultar el boton anterior si json.previous es null
    if (!json.previous) {
        btnAnterior.style.display = 'none';
    }
    //ocultar el boton anterior si json.next es null
    if (!json.next) {
        btnSiguiente.style.display = 'none';
    }

    return json.results;
}

async function printMenu(page = 1) {
    const personajes = await getDataMenu(page)
    //crear menu
    for (let personaje of personajes) {
        const li = document.createElement('li');
        li.innerText = personaje.name;
        //añadimos el elemento url a li
        li.dataset.url = personaje.url + '?format=json';
        //evento de click para el menu
        li.addEventListener('click', getPersonajeInfo);
        ulPersonajes.appendChild(li);
    }

}
async function getPersonajeInfo(event) {
    //peticion al api para recuperar info de uno
    // fetch + url = datos para investigar
    // console.log(event);
    //  console.log(event.target.dataset.url);

    const response = await fetch(event.target.dataset.url);
    const json = await response.json();

    console.log(json)
    printPersonaje(json);

}
function printPersonaje(pPersonaje) {
    // dentro del main tenemos que mostrar los datos de este(altura, peso,colorpiel,//color pelo,genero año de nacimiento)
    //* async function printPresonaje() 
    //const article = innerHtml("");

    infopersonaje.innerHTML = `
    <li>Nombre${pPersonaje.name}</li>
    <li>Nombre${pPersonaje.height}</li>
    <li>Nombre${pPersonaje.mass}</li> 
    <li>Nombre${pPersonaje.skin_color}</li>
    <li>Nombre${pPersonaje.hair_color}</li>
    <li>Nombre${pPersonaje.gender}</li>
    <li>Nombre${pPersonaje.birth_year}</li>  
`
}
function cambioPagina(event) {
    console.log(event.target);


}