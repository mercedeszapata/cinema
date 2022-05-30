//MODO OSCURO-CLARO//
let cambiarModo = document.getElementById("cambiarModo");
const hmtlCarrito = document.getElementById("listaCarrito");

let fondoBody = document.getElementById("body");
// // console.log(fondoBody.className);
// let botonNovedades = document.getElementById("novedades");
// botonNovedades.onmouseover = () => {
//     novedades.className = "colorBoton";
// }
// botonNovedades.onclick = () => {
//     alert("Ya estas suscripto");
// }

cambiarModo.addEventListener("click", () => {
    if (fondoBody.className == "claro1") {
        fondoBody.className = "oscuro1";
        divCarterlera.className = "oscuro";
    } else {
        fondoBody.className = "claro1";
        divCarterlera.className = "claro";
    }
})
//OBJETO PARA CARGAR PELÍCULAS//
class Peliculas {
    constructor(nombrePelicula, edadPermitida, genero, id) {
        this.nombreDePelicula = nombrePelicula;
        this.edad = edadPermitida;
        this.generoDePelicula = genero;
        this.id = id;
        this.cantidad = 0;
    }
}
//PELÍCULAS//
const pelicula1 = new Peliculas("Cásate conmigo", "ATP", "Romántica", 1);
const pelicula2 = new Peliculas("Duna", "ATP", "Fantástica", 2);
const pelicula3 = new Peliculas("Encanto", "ATP", "Infantil", 3);
const pelicula4 = new Peliculas("El exorcismo de Dios", "+13", "Terror", 4);
const pelicula5 = new Peliculas("Scream", "+13", "Terror", 5);
const pelicula6 = new Peliculas("Ecos de un crimen", "+13", "Suspenso", 6);
//ARRAY CON TODAS LAS PELÍCULAS//
let cartelera = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5];

let carrito = [];
//CARDS CON PELÍCULAS EN EL INDEX//
let divCarterlera = document.getElementById("divCartelera");
cartelera.forEach(peliculaEnCartelera => {
    divCarterlera.innerHTML += `
         <div class=" card peliculaEnCartelera" id="pelicula${peliculaEnCartelera.id}" style="width: 18rem;">
  
  <div class="card-body">
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
    input = document.getElementById(`contadorEntradas${peliculaASumar}`).value
    cartelera[peliculaASumar - 1].cantidad += input;
    mensajeSatisfactorio(cartelera[peliculaASumar - 1].nombreDePelicula, input);

}



let nombrePeliculaSeleccionada;
let cantidadEntradasSeleccionadas;

function mensajeSatisfactorio(_nombrepeli, _cantidadpelis) {
    console.log(_cantidadpelis)
    nombrePeliculaSeleccionada = _nombrepeli;
    cantidadEntradasSeleccionadas = _cantidadpelis;
    //GUARDADO DE DATOS EN EL LOCALSTORAGE//
    carrito.push(nombrePeliculaSeleccionada, cantidadEntradasSeleccionadas);

    localStorage.setItem("PeliculaElegida", JSON.stringify(carrito));
    //MENSAJE DE ELEMENTO AGREGADO AL CARRITO: LIBRERÍA SWEETALERT2//   
    Swal.fire({
        icon: 'success',
        title: _nombrepeli,
        text: `${_cantidadpelis} de entradas`,

    })
}