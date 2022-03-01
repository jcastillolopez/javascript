

class Profesor {
    constructor(pNombre, pApellidos, pExperiencia) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.experiencia = pExperiencia;
    }

    mostrarProfesor() {
        return `PROFESOR:profesor: ${this._nombre},apellidos: ${this._apellidos}, experiencia: ${this._experiencia}`;
    }
}

class Asignatura {
    constructor(pNombre, pProfesor) {
        this.nombre = pNombre;
        this.profesor = pProfesor;
    }

    mostrarAsignatura(muestraProfesor = true) {
        let result = `La ASIGNATURA(nombre: ${this.nombre})`;

        if (muestraProfesor) {
            result += `\nAsignatura impartida por:`
            result += `\n` + this.profesor.mostrarProfesor();
        }
        return result;
    }
}

class Estudiante {
    constructor(pNombre, pApellidos) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.asignaturas = [];
    }
    agregarAsignatura(pAsignatura) {
        this.asignaturas.push(pAsignatura);
    }
    mostrarEstudiante(mostrarAsignatura) {
        let result = `ESTUDIANTE nombre: ${this.nombre}, apellidos: ${this.apellidos}`;
        result += `\nEstas son las asignaturas que cursa:`;
        for (let asignatura of this.asignaturas) {
            result += `\n` + asignatura.mostrarAsignatura(true);
        }
        return result;
    }
}

class Universidad {
    constructor(pNombre) {
        this.pNombre = pNombre;
        this.alumnos = [];
    }
    agregarAlumno(pAlumno) {
        this.alumnos.push(this.pAlumno);
    }
    obtenerAlumnoAsignatura(nombreAsignatura) {
        let cont = 0;
        for (let alumno of this.alumnos) {
            for (let asignatura of alumno.asignaturas) {
                // console.log(asignatura.nombre);
                if (asignatura.nombre === nombreAsignatura) {
                    cont++;
                }
            }
        }
        return cont;
    }
    mostrarUniversidad(mostrarEstudiante) {
        let result = `\nUNIVERSIDAD nombre: ${this.universidad}`;
        for (let alumno of this.alumnos) {
            result += `\n` + alumno.mostrarEstudiante();
        }
        return result
    }
}



let profesor1 = new Profesor('Ramón', 'García', 5)
let profesor2 = new Profesor('Rosa', 'Martinez', 9)
//profesor1.mostrarProfesor();
///console.log(profesor1.mostrarProfesor());
//profesor2.mostrarProfesor();
//console.log(profesor2.mostrarProfesor());
let algebra = new Asignatura('Álgebra', profesor1)
let electronica = new Asignatura('Electrónica', profesor2)
let fisica = new Asignatura('Física', profesor2)
//algebra.mostrarAsignatura(false)
//console.log(algebra.mostrarAsignatura(false));
//console.log(electronica.mostrarAsignatura(true));
//fisica.mostrarAsignatura(true)

//console.log()fisica.mostrarAsignatura(true);
let estudiante1 = new Estudiante('Pepe', 'Ortiz')
let estudiante2 = new Estudiante('Ana', 'Jiménez')
let estudiante3 = new Estudiante('Lola', 'López')

estudiante1.agregarAsignatura(algebra)
estudiante1.agregarAsignatura(fisica)
estudiante2.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(algebra)
estudiante3.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(fisica)
//estudiante1.mostrarEstudiante()
//console.log(estudiante1.mostrarEstudiante());
//estudiante2.mostrarEstudiante()
//console.log(estudiante2.mostrarEstudiante());
//estudiante3.mostrarEstudiante()
//console.log(estudiante3.mostrarEstudiante());


let uni1 = new Universidad('UC3M')

uni1.agregarAlumno(estudiante1)
uni1.agregarAlumno(estudiante2)
uni1.agregarAlumno(estudiante3)
//uni1.mostrarUniversidad()

uni1.obtenerAlumnoAsignatura('Electronica')