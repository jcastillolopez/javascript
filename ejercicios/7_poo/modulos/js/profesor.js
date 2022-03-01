class Profesor {
    constructor(pNombre, pApellidos, pExperiencia) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.experiencia = pExperiencia;
    }

    mostrarProfesor() {
        return `PROFESOR:profesor: ${this.nombre},apellidos: ${this.apellidos}, experiencia: ${this.experiencia}`;
    }
}
export default Profesor;