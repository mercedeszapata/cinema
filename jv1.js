alert("Bienvenido a Cinema");

let comprar = prompt("¿Desea comprar entradas?");
//condiciones para comprar entradas//

if (comprar == "si") {
    //creación de funcion constructora//
    function Peliculas(nombrePelicula, edadPermitida, genero) {

        this.nombreDePelicula = nombrePelicula;

        this.edad = edadPermitida;

        this.generoDePelicula = genero;
    }

    const pelicula1 = new Peliculas("Cásate conmigo", "ATP", "Romántica");

    const pelicula2 = new Peliculas("Duna", "ATP", "Fantástica");

    const pelicula3 = new Peliculas("Encanto", "ATP", "Infantil");

    const pelicula4 = new Peliculas("El exorcismo de Dios", "+13", "Terror");

    const pelicula5 = new Peliculas("Scream", "+13", "Terror");

    const pelicula6 = new Peliculas("Ecos de un crimen", "+13", "Suspenso");

    //array de objetos//
    let cartelera = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5];

    let menu = parseInt(prompt("Para conocer las películas disponibles escribir 1, para salir 2"));

    //menu de peliculas//
    if (menu == 1) {

        let listado = cartelera.map(pelicula => pelicula.nombreDePelicula);

        alert(listado);

        //menu para seleccionar la pelicula a ver//
        alert("Seleccione la película que desea ver: \n");

        let mensaje = "";

        for (let i = 0; i < listado.length; i++) {

            mensaje = mensaje + (i + 1) + "-" + listado[i] + "\n";

        }

        parseInt(prompt(mensaje));

    } else {

        alert("¡Gracias por visitar nuestra página!");
    }

    let cant = parseInt(prompt("¿Cuántas entradas desea comprar?"));

    let precio;

    precio = calcularPrecio(cant);

    alert("El valor de las entradas es $" + precio + ".");

    pagar();

} else {

    alert("No te pierdas los estrenos de esta semana.");
}

//funcion para calcular valor a pagar por las entradas//
function calcularPrecio(_cant) {

    _precio = 250 * _cant;

    return _precio;

}

//funcion para seleccionar los medios de pago//
function pagar() {

    let medioDePago = prompt("Proceder a pagar. Elegir efectivo o tarjeta");

    while (medioDePago != "no") {

        switch (medioDePago) {

            case "efectivo":

                alert("Tu código de reserva es 1234. Acercate a nuestra sucursal para terminar la compra.");

                break;

            case "tarjeta":

                prompt("Ingresa el número de tu tarjeta, fecha de vencimiento y código de seguridad");

                alert("Gracias por tu compra. ¡Que disfrutes la función!");

                break;

        }

        break;

    }

}