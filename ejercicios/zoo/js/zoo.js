//pintar los animales del zoo.

const printZoo = function (pAnimalList) {
    for (let animal of pAnimalList) {
        printOneAnimal(animal);
    }
    //opcion 2
    // pAnimalList.forEach(animal => printOneAnimal(animal));
}


function printOneAnimal(pAnimal) {
    document.write(`<article class="${getPeligrosity(pAnimal.peligrosidad)}">
        <h3>${pAnimal.raza}</h3>
        <figure>
            <img src="${pAnimal.foto}"
                alt="${pAnimal.raza}">
        </figure>
        <p>Peso: ${pAnimal.peso}kg</p>
    </article>`)
}

function getPeligrosity(pNumber) {
    let peligrosity = ""

    switch (pNumber) {
        case 5:
            peligrosity = "peligroso"
            break;

        case 4:
            peligrosity = "cuidado"
            break;

        case 3:
            peligrosity = "ojito"
            break;

        case 2:
            peligrosity = "suavecito"
            break;

        case 1:
            peligrosity = "docil"
            break;
    }
    return peligrosity
}

//vamos hacer un funcion que me permita filtrar los animales por consola segun su peligrosida 
// ej: dame los animales con peligrosidad 5


function filterByPeligrosity(pAnimalList, pPeligrosity) {
    const filterList = pAnimalList.filter(animal => animal.peligrosidad === pPeligrosity)
    return filterList;
}

let animalesConPeligrosidad4 = filterByPeligrosity(animales, 4);
let animalesConPeligrosidad5 = filterByPeligrosity(animales, 5);


printZoo(animalesConPeligrosidad4);


