
const listaEmpleados = document.querySelector('.listaEmpleados');
const inputNombre = document.getElementById('inputNombre');
const inputEmail = document.getElementById('inputEmail');
const inputSalario = document.getElementById('inputSalario');
const inputSubmit = document.getElementById('inputSubmit')
const inputDepartamento = document.getElementById('inputDepartamento');
const selectDepartamento = document.getElementById('selectDepartamento');

printEmpleados(empleados, listaEmpleados);
// FUNCION QUE PINTE LOS EMPLEADOS
function printEmpleados(pEmpleados, pSection) {
    // for of
    // forEach
    // for(let i)
    for (let empleado of pEmpleados) {
        const div = printEmpleado(empleado);
        pSection.appendChild(div);
    }
}
// FUNCION QUE PINTE UN UNICO EMPLEADOS

function printEmpleado(pEmpleado) {
    listaEmpleados.innerHTML = '';

    const h3Nombre = document.createElement('h3');
    h3Nombre.innerText = pEmpleado.nombre;

    const pEmail = document.createElement('p');
    pEmail.innerText = pEmpleado.email;

    const pSalario = document.createElement('p');
    pSalario.innerText = pEmpleado.salario;

    const pDepartamento = document.createElement('p');
    pDepartamento.innerText = pEmpleado.departamento;

    const btnBorrar = document.createElement('button');
    btnBorrar.innerText = 'Borrar';
    btnBorrar.dataset.id = pEmpleado.id;
    btnBorrar.addEventListener('click', (event) => {

        empleados = borrarEmpleado(event.target.dataset.id, empleados);

        event.target.parentNode.remove();//borra el div completo con child el elemento
    })


    const div = document.createElement('div');
    div.classList.add('empleado');
    // <div class="empleado"></div>
    div.appendChild(h3Nombre);
    div.appendChild(pEmail);
    div.appendChild(pSalario);
    div.appendChild(btnBorrar);
    div.appendChild(pDepartamento);

    return div;


}
// funcion  coger datos formulario (agregar empleado cuando hagamos submit del formulario)




inputSubmit.addEventListener('click', saveEmpleado)

function saveEmpleado(event) {
    event.preventDefault();


    // crear un objeto con los datos del nuevo empleado con el form

    const nuevoEmpleado = {
        id: empleados.length + 1,
        nombre: inputNombre.value,
        email: inputEmail.value,
        salario: inputSalario.value,
        departamento: inputDepartamento.value,
    }
    // incluir este objeto dentro del array
    empleados.push(nuevoEmpleado);

    // pintar el nuevo empleado en el html
    // pintamos solo el nuevo o repintamos todos
    const divNuevoEmpleado = printEmpleado(nuevoEmpleado);
    listaEmpleados.appendChild(divNuevoEmpleado);
}
// borrar elementos de la lista
function borrarEmpleado(pId, pEmpleados) {
    const nuevoArr = [];
    for (const empleado of pEmpleados) {
        // cuidado con la condicion de ==
        if (empleado.id !== number(pId)) {
            nuevoArr.push(empleado);
        }
    }
    return nuevoArr;
}
// 1-- recuperar departamento
//1- capturar el select 
// 2- asignar el evento CHANGE



// 3-- mostrar el elemento
selectDepartamento.addEventListener('change', (event) => {
    //2-- filtrar el array
    const filtrados = [];
    for (let empleado of empleados) {
        if (empleado.departamento === event.target.value) {
            filtrados.push(empleado);
        }

    }
    const filtrado = empleados.filter((empleado) => {
        //debemos reyornar true o false dependiendo si queremos que pase el filtro
        if (empleado.departamento === event.target.value) {
            return true;
        } else {
            return false;
        }

    });
    printEmpleados(filtrados, listaEmpleados);
});