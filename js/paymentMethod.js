let regexTarjeta = /^[0-9]{10}$/;
let regexTarjetaError = /^[0]{10}$/;

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validar();
});

function validar() {
    let error = false;
    const numTarjeta = document.querySelector("#numeroTar").value;
    let suma=0;

    for (var i = 0; i < numTarjeta.length-1; i++) {
        suma += parseInt(numTarjeta[i]);
    }
    console.log(suma);

    if (regexTarjetaError.test(numTarjeta)) {
        error = true;
        alert("No es un numero de tarjeta valido");
    } else if ((numTarjeta[numTarjeta.length - 1] % 2 == 0) && (suma % 2 != 0)) {
    } else if ((numTarjeta[numTarjeta.length - 1] % 2 != 0) && (suma % 2 == 0)) {
    } else {
        alert("numero de tarjeta inválida");
    }
}