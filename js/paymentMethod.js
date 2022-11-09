let regexTarjeta = /^\d{10}$/;
let regexAlias = /^[a-zA-Z._.-]{5,10}$/;
let regexCod = /^\d{3}$/;
let regexVenc = /^\d{2}[- /.]\d{2}$/;
let regexTitular = /^[a-zA-Z._.-]{5,15}$/;

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validar();
});

function validar() {
    let errorTarjeta = false;
    let errorAlias = false;
    let errorCod = false;
    let errorVenc = false;
    let errorTitular = false;
    const numTarjeta = document.querySelector("#numeroTar").value;
    const alias = document.querySelector("#alias").value;
    const codigo = document.querySelector("#codigoCvv").value;
    const vencimiento = document.querySelector("#vencimiento").value;
    const titular = document.querySelector("#titular").value;
    let errorMessageTar = "";
    let errorMessageAlias = "";
    let errorMessageCod = "";
    let errorMessageVenc = "";
    let errorMessageTitular = "";
    let suma = 0;

    //Validacion alias
    if (!regexAlias.test(alias)) {
        errorAlias = true;
        errorMessageAlias += "<p>No es un alias valido</p>";
        document.getElementById("mensaje2").innerHTML = errorMessageAlias;
    } else {
        document.getElementById("mensaje2").innerHTML = "";
    }

    for (var i = 0; i < numTarjeta.length - 1; i++) {
        suma += parseInt(numTarjeta[i]);
    }

//Validacion Numero de tarjeta
    if (!regexTarjeta.test(numTarjeta)) {
        errorTarjeta = true;
        errorMessageTar += "<p>No es un numero de tarjeta valido</p>"
        document.getElementById("mensaje1").innerHTML = errorMessageTar;
    } else {
        if ((numTarjeta[numTarjeta.length - 1] % 2 != 0) && (suma % 2 != 0)) {
            errorMessageTar += "<p>No es un numero de tarjeta valido</p>"
            document.getElementById("mensaje1").innerHTML = errorMessageTar;
        } else {
            if ((numTarjeta[numTarjeta.length - 1] % 2 == 0) && (suma % 2 == 0)) {
                errorTarjeta = true;
                errorMessageTar += "<p>No es un numero de tarjeta valido</p>"
                document.getElementById("mensaje1").innerHTML = errorMessageTar;
            } else {
                document.getElementById("mensaje1").innerHTML = ""
            }
        }
    }
    //Validacion Codigo CVV
    if (!regexCod.test(codigo)) {
        errorCod = true;
        errorMessageCod += "<p>No es un codigo CVV valido</p>";
        document.getElementById("mensaje3").innerHTML = errorMessageCod;
    } else {
        document.getElementById("mensaje3").innerHTML = "";
    }

//Validacion vencimiento
    if (!regexVenc.test(vencimiento)) {
        errorVenc = true;
        errorMessageVenc += "<p>No es un vencimiento valido</p>";
        document.getElementById("mensaje4").innerHTML = errorMessageVenc;
    } else {
        document.getElementById("mensaje4").innerHTML = "";
    }

    //Validacion nombre del titular
    if (!regexTitular.test(titular)) {
        errorTitular = true;
        errorMessageTitular += "<p>No es un nombre valido</p>";
        document.getElementById("mensaje5").innerHTML = errorMessageTitular;
    } else {
        document.getElementById("mensaje5").innerHTML = "";
    }

    if (!(errorTarjeta && errorAlias && errorCod && errorVenc && errorTitular)) {
        submit();
        document.getElementById("mensaje6").innerHTML = "";
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