const lisGeneral = document.querySelector(`.General  ul`);
const lisEdad = document.querySelector(`.Edad  ul`);
const lisEnfermedad = document.querySelector(`.Enfermedad  ul`);
const lisNumeroSSocial = document.querySelector(`.NumeroSSocial  ul`);




// **************pintar html
function pintarPacientes(pPacientes, phtml) {
    let li_etiqueta = "";
    for (const paciente of pPacientes) {
        li_etiqueta += `<li>${paciente.nombre}  ${paciente.apellido}</li>`;
    }
    phtml.innerHTML = li_etiqueta;
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
        span.innerText = pHospital;
    }
}
// ********************pruebas consola
pintarPacientes(filtrarEdad(pacientesPrincesa, 25, 18), lisEdad);
pintarPacientes(filtrarNumSS(pacientesPrincesa, 0), lisNumeroSSocial);
pintarPacientes(filtrarEnfermedad(pacientesPrincesa, 'Coronavirus'), lisEnfermedad);
hospital(' La Princesa')

console.log(filtrarEdad(pacientes12octubre, 25, 18))
console.log(pintarPacientes(pacientesPrincesa, lisGeneral))
console.log(filtrarNumSS(pacientes12octubre, 0))
console.log(filtrarEnfermedad(pacientes12octubre, 'Coronavirus'))
hospital(' La Princesa')

