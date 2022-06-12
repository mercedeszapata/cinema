//OBJETO PARA CARGAR ESTRENOS SEMANALES//
class Estrenos {
    constructor(nombrePelicula, edadPermitida, genero, descripcion, imagen) {
        this.nombreDePelicula = nombrePelicula;
        this.edad = edadPermitida;
        this.generoDePelicula = genero;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

//ESTRENOS//
const estreno1 = new Estrenos("Top Gun Maverick", "ATP", "Acción", "Después de más de treinta años de servicio como uno de los mejores aviadores de la Armada, Pete Maverick Mitchell (Tom Cruise) está donde pertenece, como un valiente piloto de prueba y esquivando el avance en el rango que lo pondría en tierra. Cuando se halla entrenando a un destacamento de graduados de Top Gun para una misión especializada que ningún piloto vivo ha visto nunca, Maverick se encuentra con el teniente Bradley Bradshaw (Miles Teller), llamada: Gallo, el hijo del difunto amigo de Maverick y el oficial de intercepción de radar, el teniente Nick Bradshaw, también conocido como Goose. Enfrentando un futuro incierto y confrontando a los fantasmas de su pasado, Maverick se ve envuelto en una confrontación con sus propios miedos más profundos, culminando en una misión que exige el máximo sacrificio de aquellos que serán elegidos para volar.", "https://i.ibb.co/N1JCXGN/b62354cdb2a13bbd38f3901446cc817e.jpg");
const estreno2 = new Estrenos("Jurassic World dominio", "+13", "Aventura", "Del arquitecto y director de Mundo Jurásico, Colin Trevorrow. Dominio tiene lugar cuatro años después de la destrucción de Isla Nublar. Los dinosaurios ahora viven y cazan junto a los humanos en todo el mundo. Este frágil equilibrio cambiará el futuro y determinará, de una vez por todas, si los seres humanos deben seguir siendo los depredadores máximos en un planeta que ahora comparten con las criaturas más temibles de la historia.", "https://i.ibb.co/N7Dnh8X/8e790cea0d15c67b011cb150ba71ad94.jpg");
const estreno3 = new Estrenos("El hombre del norte", "+13", "Acción", "Del visionario director Robert Eggers llega El Hombre del Norte, una épica aventura llena de acción que narra la búsqueda de un joven príncipe vikingo para vengar el asesinato de su padre. Con un reparto espectacular que incluye a Alexander Skarsgård, Nicole Kidman, Claes Bang, Anya Taylor-Joy, Ethan Hawke, Björk y Willem Dafoe.", "https://i.ibb.co/CvCpJDM/b3e3ceb8e6fe76743f9aa486ad8280e3.jpg");

//ARRAY CON LOS ESTRENOS//
let estrenoSemana = [estreno1, estreno2, estreno3];

//CARDS CON LOS ESTRENOS//
let divEstrenos = document.getElementById("divEstrenos");
estrenoSemana.forEach(estrenoEnEstrenoSemana => {
    divEstrenos.innerHTML += `
  
  <div class="card-body">
  <img src="${estrenoEnEstrenoSemana.imagen}" class="card-img-top" alt="...">
    <h5 class="card-title">${estrenoEnEstrenoSemana.nombreDePelicula}</h5>
    <p class="card-text">${estrenoEnEstrenoSemana.edad}</p>
    <p class="card-text">${estrenoEnEstrenoSemana.generoDePelicula}</p>
    <p class="card-text">${estrenoEnEstrenoSemana.descripcion}</p>
    
        </div>
</div>
         `


})