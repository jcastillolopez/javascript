const lisGeneral = document.querySelectorAll(`.General  ul`);
const lisEdad = document.querySelectorAll(`.Edad  ul`);
const lisEnfermedad = document.querySelectorAll(`.Enfermedad  ul`);
const lisNumeroSSocial = document.querySelectorAll(`.NumeroSSocial  ul`);

const pacientesPrincesa = new Array(
    {
        nombre: 'Lucia',
        apellido: 'Alvarez',
        edad: 43,
        diagnostico: 'Gripe',
        numeroSS: 'A123456'
    },
    {
        nombre: 'Carlos',
        apellido: 'Andres',
        edad: 56,
        diagnostico: 'Conjuntivitis',
        numeroSS: 'K34567000',
    },
    {
        nombre: 'Jose',
        apellido: 'Dominguez',
        edad: 67,
        diagnostico: 'Coronavirus',
        numeroSS: 'O934571',
    },
    {
        nombre: 'Elena',
        apellido: 'Prados',
        edad: 18,
        diagnostico: 'Asma',
        numeroSS: 'I823455',
    },
    {
        nombre: 'Maria',
        apellido: 'Carreño',
        edad: 45,
        diagnostico: 'Cancer',
        numeroSS: 'P123454',
    },
    {
        nombre: 'Pepe',
        apellido: 'Guzman',
        edad: 89,
        diagnostico: 'Asma',
        numeroSS: 'Q12362548',
    },
    {
        nombre: 'Ricardo',
        apellido: 'Gomez',
        edad: 24,
        diagnostico: 'Conjuntivitis',
        numeroSS: 'I324610',
    },
    {
        nombre: 'Sasha',
        apellido: 'Grey',
        edad: 28,
        diagnostico: 'Coronavirus',
        numeroSS: 'Q345126',
    },
    {
        nombre: 'Marta',
        apellido: 'Carrasco',
        edad: 27,
        diagnostico: 'Gripe',
        numeroSS: 'Q124500',
    },
    {
        nombre: 'Pepe',
        apellido: 'Gomez',
        edad: 65,
        diagnostico: 'Torcedura',
        numeroSS: 'K123652',
    },
    {
        nombre: 'Pepita',
        apellido: 'Juarez',
        edad: 48,
        diagnostico: 'Gripe',
        numeroSS: 'S231583',
    },
    {
        nombre: 'Pablo',
        apellido: 'Motos',
        edad: 55,
        diagnostico: 'Torcedura',
        numeroSS: 'R23456',
    }
);


const pacientes12octubre = new Array(
    {
        nombre: 'Juanjo',
        apellido: 'Alvarez',
        edad: 43,
        diagnostico: 'Gripe',
        numeroSS: 'A123456'
    },
    {
        nombre: 'Sandra',
        apellido: 'Andres',
        edad: 56,
        diagnostico: 'Diabetes',
        numeroSS: 'K34567000',
    }
)


// **************pintar html
function pintarPacientes(pPacientes, phtml) {
    let li_etiqueta = "";
    for (const paciente of pPacientes) {
        li_etiqueta += `<li>${paciente.nombre}  ${paciente.apellido}</li>`;
    }
    phtml.innerHTML = li_etiqueta;
    return li_etiqueta;
}
// ************funcion filtro por eddes
function filtrarEdad(pPacientes, pEdadMax, pEdadMin) {
    const PacientePorEdad = pPacientes.filter(paciente => paciente.edad >= pEdadMin && paciente.edad <= pEdadMax);

    return PacientePorEdad;
}

// ***************************funcion filtrar por ultimo numero ss
function filtrarNumSS(pPacientes, digito) {
    const PacientesPorNumSS = pPacientes.filter(paciente => paciente.numeroSS.slice(-1) == digito);

    return PacientesPorNumSS
}
//***************************funcion filtrar por enfermedad
function filtrarEnfermedad(pPacientes, pdiagnostico) {
    const PacientesPorDiagnostico = pPacientes.filter(paciente => paciente.diagnostico === pdiagnostico);

    return PacientesPorDiagnostico
}
//*******************Cambio Hospital */
function hospital(pHospital) {
    const hospital = document.querySelectorAll(`.nomHospital `);
    for (let h2 of hospital) {
        h2.innerText = pHospital;
    }
}
// ********************pruebas consola
pintarPacientes(filtrarEdad(pacientes12octubre, 25, 18), lisEdad);
pintarPacientes(filtrarNumSS(pacientes12octubre, 0), lisNumeroSSocial);
pintarPacientes(filtrarEnfermedad(pacientes12octubre, 'Coronavirus'), lisEnfermedad);
hospital('12 de Octubre')

console.log(filtrarEdad(pacientes12octubre, 25, 18))
console.log(pintarPacientes(pacientes12octubre, lisGeneral))
console.log(filtrarNumSS(pacientes12octubre, 0))
console.log(filtrarEnfermedad(pacientes12octubre, 'Coronavirus'))
hospital('hola')

