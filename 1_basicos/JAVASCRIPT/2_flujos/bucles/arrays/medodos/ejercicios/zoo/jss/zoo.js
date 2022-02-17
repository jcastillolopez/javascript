// pintar los animales del zoo


const printZoo = function (pAnimalList) {
    for (let animal of pAnimalList) {
        printOneAnimal(animal);
    }

    // pAnimalList.array.forEach(animal => printOneAnimal();
}


function printOneAnimal(pAnimal) {
    document.write(` <article class="${GetPeligrosity(pAnimal.peligrosidad)}">
    <h3>${pAnimal.raza}</h3>
    <figure>
        <img src="${pAnimal.foto}"
            alt="${pAnimal.raza}">
    </figure>
    <p>Peso: ${pAnimal.peso}Kg</p>
</article>`)
}
function GetPeligrosity(pNumber) {
    let peligrosity = ""
    switch (pNumber) {
        case 5:
            peligrosity = "peligroso"
            break
        case 4:
            peligrosity = "cuidado"
            break
        case 3:
            peligrosity = "ojito"
            break
        case 2:
            peligrosity = "suavecito"
            break
        case 1:
            peligrosity = "docil"
            break
    }
    return peligrosity

}
// hacer una function que me permita filtrar los animales por consola segun su peligrosidad
function filterByPeligrosity(pAnimalList, pPeligrosity) {
    const filterList = pAnimalList.filter(animal => animal.peligrosidad === pPeligrosity);

    return filterList
}
let animalesConPeligrosidad4 = filterByPeligrosity(animales, 4)


printZoo(animalesConPeligrosidad4)
printZoo(animales)
