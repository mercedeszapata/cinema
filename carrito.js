//OBTENGO LA INFO DEL LOCAL STORAGE//

let listaCarrito = JSON.parse(localStorage.getItem("PeliculaElegida"));
console.log(listaCarrito);

let carrito = [listaCarrito];
console.log(listaCarrito[0]);
//CÁLCULO DEL PRECIO FINAL A PAGAR//
let precio = 650;
let dolar;
let cantApagar = precio * listaCarrito[1];
console.log(cantApagar);




//VISTA DEL CARRITO DE COMPRAS//


document.getElementById("divListaCarrito");

divListaCarrito.innerHTML += `
    <div class="card text-center">
    <div class="card-header">
      CARRITO
    </div>
    <div class="card-body">
      <h5 class="card-title">${listaCarrito[0]}</h5>
      <p class="card-text">${listaCarrito[1] + " entradas"}</p>
      <p class="card-text"> Total: $ ${cantApagar}</p>
      <p class="card-text" id="precioDolar"></p>
      <a href="#" class="btn btn-primary" onclick="mensajeCompra ()">FINALIZAR COMPRA</a>
    </div>
    
  </div>
  `





setInterval(() => {
  fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({
      oficial
    }) => {

      dolar = cantApagar / oficial;
      console.log(dolar);
      document.getElementById("precioDolar");

      precioDolar.innerHTML = ` US$: ${dolar}`
    })
}, 300);




//FUNCIÓN QUE MUESTRA MENSAJE DE COMPRA REALIZADA//
function mensajeCompra() {
  Toastify({

    text: "Compra realizada",

    duration: 3000


  }).showToast();

}