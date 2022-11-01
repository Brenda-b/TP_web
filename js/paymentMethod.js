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
    let errorMessage = ""
    let suma = 0;

    for (var i = 0; i < numTarjeta.length - 1; i++) {
        suma += parseInt(numTarjeta[i]);
    }

    if (!regexTarjeta.test(numTarjeta)) {
        //alert("No es un numero de tarjeta valido");
        error = true;
        errorMessage += "<p>No es un numero de tarjeta valido</p>"
    } else if ((numTarjeta[numTarjeta.length - 1] % 2 == 0) && (suma % 2 != 0)) {
        errorMessage += "<p>No es un numero de tarjeta valido</p>"
    } else if ((numTarjeta[numTarjeta.length - 1] % 2 != 0) && (suma % 2 == 0)) {
    } else {
        error = true;
        errorMessage += "<p>No es un numero de tarjeta valido</p>"
    }

    if (error) {
        document.getElementById("mensaje").innerHTML = errorMessage;
    }
    else {
        submit();
        document.getElementById("mensaje").innerHTML = "";
    }

}
function submit() {
    let metodoDePago = {
        alias: document.getElementById("alias").value,
        numero: document.getElementById("numeroTar").value,
        codigo: document.getElementById("codigoCvv").value,
        vencimiento: document.getElementById("vencimiento").value,
        titular: document.getElementById("titular").value,
    }
    console.log(metodoDePago)
    localStorage.setItem("NewCard", JSON.stringify(metodoDePago));
}