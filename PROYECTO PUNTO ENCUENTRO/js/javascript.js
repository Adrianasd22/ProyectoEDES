/*Boton que añade idiomas */
const botonAñadeIdiomas = document.getElementById("botonAddLeng");
const SelectIdiomas = document.getElementById("IdiomasSelect");
const idiomaListaDiv = document.getElementById("idiomaListaDiv");


const botonRe = document.getElementById("botonRe");
const botonIS = document.getElementById("botonISe");


if (botonIS) {
    botonIS.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.assign('../index.html');
    });
}
if (botonRe) {
    botonRe.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.assign('../index.html');
    });
}
if (botonAñadeIdiomas) {
    botonAñadeIdiomas.addEventListener("click", function(event) {
    event.preventDefault();
    //Cogemos que es lo que se ha seleccionado en el select
    const idiomaSeleccionado = document.getElementById("IdiomasSelect").value;
    const nivelIdiomaSeleccionado = document.getElementById("IdiomasNivel").value;

    const creacionDiv = document.createElement("div");
    idiomaListaDiv.classList.add("idiomaListaDiv");
    idiomaListaDiv.appendChild(creacionDiv);
    
    //Creamos los parrafos donde esta la informacion
    const createParr1 = document.createElement("span");
    creacionDiv.appendChild(createParr1);
    createParr1.classList.add("IdiomaParr");
    createParr1.textContent = idiomaSeleccionado;

    const createParr2 = document.createElement("span");
    creacionDiv.appendChild(createParr2);
    createParr2.classList.add("IdiomaParr");
    createParr2.textContent = nivelIdiomaSeleccionado;

    });
}



