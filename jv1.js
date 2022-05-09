alert("Bienvenido a Cinema");


let cambiarModo= document.getElementById("cambiarModo");
console.log(cambiarModo);
let fondoBody= document.getElementById("body");
console.log(fondoBody.className);
    cambiarModo.addEventListener("click", ()=>{
        if(fondoBody.className=="claro"){
            fondoBody.className= "oscuro";
            divCarterlera.className="oscuro"
        }
        else{
            fondoBody.className="claro";
            divCarterlera.className="claro";
        }
    })

class Peliculas {
    constructor(nombrePelicula, edadPermitida, genero, id) {
        this.nombreDePelicula = nombrePelicula;
        this.edad = edadPermitida;
        this.generoDePelicula = genero;
        this.id = id;
    }
}
const pelicula1 = new Peliculas("Cásate conmigo", "ATP", "Romántica");
const pelicula2 = new Peliculas("Duna", "ATP", "Fantástica");
const pelicula3 = new Peliculas("Encanto", "ATP", "Infantil");
const pelicula4 = new Peliculas("El exorcismo de Dios", "+13", "Terror");
const pelicula5 = new Peliculas("Scream", "+13", "Terror");
const pelicula6 = new Peliculas("Ecos de un crimen", "+13", "Suspenso");

let cartelera = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5];
let divCarterlera = document.getElementById("divCartelera");
cartelera.forEach(peliculaEnCartelera => {
        divCarterlera.innerHTML += `
         <div class=" card peliculaEnCartelera" id="pelicula${peliculaEnCartelera.id}" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">${peliculaEnCartelera.nombreDePelicula}</h5>
    <p class="card-text">${peliculaEnCartelera.edad}</p>
    <p class="card-text">${peliculaEnCartelera.generoDePelicula}</p>
    <button class="btn btn-primary comprarEntrada" id="boton${peliculaEnCartelera.id}><a href="#" class="btn btn-primary"></a>Comprar</button>
  </div>
</div>
         `
    }

)





    


