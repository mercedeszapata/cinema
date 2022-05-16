alert("Bienvenido a Cinema");


let cambiarModo= document.getElementById("cambiarModo");
console.log(cambiarModo);
let fondoBody= document.getElementById("body");
console.log(fondoBody.className);
let botonNovedades=document.getElementById("novedades");
botonNovedades.onmouseover=()=>{
    novedades.className= "colorBoton";
    }
botonNovedades.onclick=()=>{
    alert("Ya estas suscripto");
}

    cambiarModo.addEventListener("click", ()=>{
        if(fondoBody.className=="claro"){
            fondoBody.className= "oscuro";
            divCarterlera.className="oscuro";
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
const pelicula1 = new Peliculas("Cásate conmigo", "ATP", "Romántica",1);
const pelicula2 = new Peliculas("Duna", "ATP", "Fantástica",2);
const pelicula3 = new Peliculas("Encanto", "ATP", "Infantil",3);
const pelicula4 = new Peliculas("El exorcismo de Dios", "+13", "Terror",4);
const pelicula5 = new Peliculas("Scream", "+13", "Terror",5);
const pelicula6 = new Peliculas("Ecos de un crimen", "+13", "Suspenso",6);

let cartelera = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5];
let carrito=[];
let divCarterlera = document.getElementById("divCartelera");
cartelera.forEach(peliculaEnCartelera => {
        divCarterlera.innerHTML += `
         <div class=" card peliculaEnCartelera" id="pelicula${peliculaEnCartelera.id}" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">${peliculaEnCartelera.nombreDePelicula}</h5>
    <p class="card-text">${peliculaEnCartelera.edad}</p>
    <p class="card-text">${peliculaEnCartelera.generoDePelicula}</p>
    <button id= "boton${peliculaEnCartelera.id}"class="btn btn-primary comprarEntrada" id="boton${peliculaEnCartelera.id}><a href="#" class="btn btn-primary"></a>Comprar entrada</button>
  </div>
</div>
         `
    

    }
)


cartelera.forEach(peliculaEnCartelera=>{
    document.getElementById(`boton${peliculaEnCartelera.id}`).addEventListener("click", ()=> {
        
    carrito.push(peliculaEnCartelera.nombreDePelicula)
    localStorage.setItem("productosCarrito", JSON.stringify(carrito))
    })
})

    





    


