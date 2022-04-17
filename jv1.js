alert("Bienvenido a Cinema");
let comprar= prompt("¿Desea comprar entradas?");
if (comprar == "si") {
    let cantidad= parseInt(prompt("¿Cuántas entradas desea comprar?"));
    let precio= 250 * cantidad;
    alert("El valor de las entradas es $" + precio + ".");
    let medioDePago= prompt("Proceder a pagar. Elegir efectivo o tarjeta");
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
else {
    alert("No te pierdas los estrenos de esta semana.");
}