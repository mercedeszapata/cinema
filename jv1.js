//OBJETO PARA CARGAR PELÍCULAS//
class Peliculas {
    constructor(nombrePelicula, edadPermitida, genero, id, imagen) {
        this.nombreDePelicula = nombrePelicula;
        this.edad = edadPermitida;
        this.generoDePelicula = genero;
        this.id = id;
        this.cantidad = 0;
        this.imagen = imagen;
    }
}
//PELÍCULAS//
const pelicula1 = new Peliculas("Cásate conmigo", "ATP", "Romántica", 1, "https://i.ibb.co/P4xfcWb/C-sate-conmigo.jpg");
const pelicula2 = new Peliculas("Duna", "ATP", "Fantástica", 2, "https://i.ibb.co/wMCrzF4/Duna.jpg");
const pelicula3 = new Peliculas("Encanto", "ATP", "Infantil", 3, "https://i.ibb.co/qLHM6hw/Encanto.jpg");
const pelicula4 = new Peliculas("El exorcismo de Dios", "+13", "Terror", 4, "https://i.ibb.co/n70rhsx/El-exorcismo-de-Dios.jpg");
const pelicula5 = new Peliculas("Scream", "+13", "Terror", 5, "https://i.ibb.co/P4DLp65/Scream.jpg");
const pelicula6 = new Peliculas("Ecos de un crimen", "+13", "Suspenso", 6, "https://i.ibb.co/RDmnzcq/Ecos-de-un-crimen.jpg");
const pelicula7 = new Peliculas("Batman", "ATP", "Acción/Aventura", 7, "https://i.ibb.co/rZDCCtw/Batman.jpg");
const pelicula8 = new Peliculas("Clifford", "ATP", "Infantil/Comedia", 8, "https://i.ibb.co/9h3MXS6/Clifford.jpg");
const pelicula9 = new Peliculas("Belfast", "+13", "Drama", 9, "https://i.ibb.co/4Y8zXD7/Belfast.jpg");
const pelicula10 = new Peliculas("La llamada final", "+13", "Terror", 10, "https://i.ibb.co/12YSKmz/La-llamada-fina.jpg");
const pelicula11 = new Peliculas("Milagro en la cueva", "+13", "Aventura/Drama", 11, "https://i.ibb.co/TmD30PR/Milagro-en-la-cueva.jpg");
const pelicula12 = new Peliculas("Muerte en el Nilo", "+13", "Suspenso", 12, "https://i.ibb.co/YBZvVmz/Muerte-en-el-Nilo.jpg");
const pelicula13 = new Peliculas("Noche americana", "+13", "Coemdia", 13, "https://i.ibb.co/wM2KNHJ/Noche-americana.jpg");
const pelicula14 = new Peliculas("Sing 2", "ATP", "Musical/Comedia", 14, "https://i.ibb.co/Gk0ygvX/Sing-2.jpg");
const pelicula15 = new Peliculas("Spiderman: Sin camino a casa", "ATP", "Acción/Aventura", 15, "https://i.ibb.co/SJPzWsN/Spiderman-sin-camino-a-casa.jpg");


//ARRAY CON TODAS LAS PELÍCULAS//
let cartelera = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6, pelicula7, pelicula8, pelicula9, pelicula10, pelicula11, pelicula12, pelicula13, pelicula14, pelicula15];

let carrito = [];
//CARDS CON PELÍCULAS EN CARTELERA//
let divCarterlera = document.getElementById("divCartelera");
cartelera.forEach(peliculaEnCartelera => {
    divCarterlera.innerHTML += `
  
  <div class="card-body">
  <img src="${peliculaEnCartelera.imagen}" class="card-img-top" alt="...">
    <h5 class="card-title">${peliculaEnCartelera.nombreDePelicula}</h5>
    <p class="card-text">${peliculaEnCartelera.edad}</p>
    <p class="card-text">${peliculaEnCartelera.generoDePelicula}</p>
    <input type="text" name="" id="contadorEntradas${peliculaEnCartelera.id}">
    <button id= "boton${peliculaEnCartelera.id}"class="btn btn-primary comprarEntrada" onclick="contadorDeEntradas(${peliculaEnCartelera.id})" id="boton${peliculaEnCartelera.id}><a href="#" class="btn btn-primary"><i class="fa-solid fa-plus"></i></button>
        </div>
</div>
         `


})
//FUNCIÓN PARA SUMAR LA CANTIDAD DE ENTRADAS A COMPRAR//

function contadorDeEntradas(peliculaASumar) {
    input = document.getElementById(`contadorEntradas${peliculaASumar}`).value || 0

    if (input > 0) {
        cartelera[peliculaASumar - 1].cantidad += input;
        mensajeSatisfactorio(cartelera[peliculaASumar - 1].nombreDePelicula, input);

    } else {
        Swal.fire({
            icon: 'error',
            title: "Error",
            text: "Ingrese una cantidad válida",

        })
    }



}

let nombrePeliculaSeleccionada;
let cantidadEntradasSeleccionadas;


function mensajeSatisfactorio(_nombrepeli, _cantidadpelis) {
    console.log(_cantidadpelis)
    nombrePeliculaSeleccionada = _nombrepeli;
    cantidadEntradasSeleccionadas = _cantidadpelis;

    //GUARDADO DE DATOS EN EL LOCALSTORAGE//
    carrito.push(nombrePeliculaSeleccionada, cantidadEntradasSeleccionadas, );

    localStorage.setItem("PeliculaElegida", JSON.stringify(carrito));
    //MENSAJE DE ELEMENTO AGREGADO AL CARRITO: LIBRERÍA SWEETALERT2//   
    Swal.fire({
        icon: 'success',
        title: _nombrepeli,
        text: `${_cantidadpelis} de entradas`,

    })
}