/**
 * generae el html
 * dentro del js a partir de la url lanzamos con fetch la peticion->console log con los personajes que recuperamos
 * 
 *  
 */


/*function getDataMenu() {
    //async - await
    fetch('https://swapi.dev/api/people/?format=json')
        .then(response => response.json())
        .then((json) => {
            console.log(json.results);
        });
}
getDataMenu()*/
//async - await
//1- colocar la palabra await delante de la ejecucuin de la promesa
//2 colocar la palabra async delante de la funcion donde estamos ejecutando la promesa
//3- el valor que recibimos en then ahora lo recibimos como una variable al ejecutar la promesa

async function getDataMenu() {
    const response = await fetch('https://swapi.dev/api/people/?format=json');
    const json = await response.json();

    console.log(json.results);
    return json.results
};
printMenu();
// recuperar los personajes(ejecutar la funcion anterior)


//Incluir el nombre de cada personaje dentro del menu


// para que eto funcione hay que ejecutar esta funcion

// preparar html
async function getDataMenu() { }
const personajes = await fetch('ttps://swapi.dev/api/people/?format=json')
const pli = document.createElement('#li');
const ulliPersonaje = document.querySelector('.personajes');
ulliPersonaje

}
