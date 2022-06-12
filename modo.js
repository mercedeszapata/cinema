//MODO OSCURO-CLARO//
let cambiarModo = document.getElementById("cambiarModo");
const hmtlCarrito = document.getElementById("listaCarrito");

let fondoBody = document.getElementById("body");

fondoBody.className == "claro1";
cambiarModo.addEventListener("click", () => {
    if (fondoBody.className == "claro1") {
        fondoBody.className = "oscuro1";
        divCarterlera.className = "oscuro";
    } else {
        fondoBody.className = "claro1";
        divCarterlera.className = "claro";
    }
})