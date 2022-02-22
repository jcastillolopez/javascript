/** 
 * FETCH
 * - Ejecutar peticiones web
 * - Fetch nos devuelve una PROMESA
 * 
 * Métodos HTTP
 * GET -> Recuperar información
 * POST -> Crear un recurso
 * PUT -> Modificación de un recurso
 * DELETE -> Borrar un recurso
 * API
 */

/**.then((response) => {
console.log(response);
return response.json();
}).then((data) => {
console.log(data);
});*/
// 1-en el html creamos un div class users
// 2- en el js creamos una function print printuser(user)
//    -devolver el div donde vamos a mostrar los datos del usuario(=que los empleados)
//3- dentro de la resolucion de la promes recorremos el array(json.data) y llamamos a la funcion una vez por usuario


/****************capturas los datos******************************** */

fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(json => json.data)
    .then(datosCapturados => {
        console.log(datosCapturados);
        const seccionCapturada = document.querySelector(".listaUsuarios");
        printUsers(datosCapturados, seccionCapturada)
    })

/********pasar lista de datos******************************** */
//printUsers(data, json.data)

/*************funcion pintar usuarios******************** */
function printUsers(pUser, pSection) {
    for (const user of pUser) {
        const div = printUser(user);
        pSection.appendChild(div);
    }
}
//************ pintar un usuario************************ */
function printUser(pUser) {

    //***************Pintar el div contenedor*************** */


    const pNombreCompleto = document.createElement('h3');
    pNombreCompleto.innerText = pUser.first_name + " " + pUser.last_name

    const pAvatar = document.createElement('img');
    pAvatar.src = pUser.avatar;

    const pId = document.createElement('p');
    pId.innerText = pUser.id;

    const pEmail = document.createElement('p');
    pEmail.innerText = pUser.email;

    const pFirst_name = document.createElement('p');
    pFirst_name.innerText = pUser.first_name;

    const pLast_name = document.createElement('p');
    pLast_name.innerText = pUser.last_name;

    const div = document.createElement('div');
    div.classList.add("user");

    div.appendChild(pAvatar);
    div.appendChild(pNombreCompleto);
    div.appendChild(pId);
    div.appendChild(pEmail);
    div.appendChild(pFirst_name);
    div.appendChild(pLast_name)
    return div;
    //*****************pintar elementos dentro del div************ */
    // const pNombreCompeto = document.createElement('h3');
    //  pNombreCompeto.innerText = pUser.first_name && pUser.pLast_name;)


    //**********************Elementos pintados */

}
