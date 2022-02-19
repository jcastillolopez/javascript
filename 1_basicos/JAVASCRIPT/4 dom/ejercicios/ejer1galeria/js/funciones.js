const seccionGaleria = document.querySelector('.galeria');



function printGallery(pLista, pSection) {
    pLista.forEach(elemento => printPhoto(elemento, pSection));
};

function printPhoto(pPhoto, pSection) {
    const figure = document.createElement('figure');//<figure/><figure/>
    figure.style.width = pPhoto.ancho + 'px';
    figure.style.height = pPhoto.alto + 'px';
    figure.style.backgroundImage = `url(${pPhoto.url}`;

    const figcaption = document.createElement('figcaption');
    figcaption.innerText = pPhoto.title;

    figure.appendChild(figcaption);
    pSection.appendChild(figure);

}

printGallery(imagenes, galeria);

function markImg(pNumImg, pBorde, pColor) {
    const figureseleccionado = document.querySelector('.galeria figure:nth-child(`${pNumImagen}`) ')
    figureseleccionado.style.border = `${pBorder}`

}
