alert("Bienvenido a Cinema");
let comprar= prompt("¿Desea comprar entradas?");
let cant= parseInt(prompt("¿Cuántas entradas desea comprar?"));
let precio;

if (comprar == "si") {
    
    precio=calcularPrecio(cant);
    alert("El valor de las entradas es $" + precio + ".");
    pagar();
    
} 
else {
    alert("No te pierdas los estrenos de esta semana.");
}


function calcularPrecio(_cant){
    _precio= 250 * _cant;
    return _precio;
    
}
function pagar(){
    let medioDePago=prompt("Proceder a pagar. Elegir efectivo o tarjeta");
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