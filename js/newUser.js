let regexNombre = /^[A-Z]+[a-zA-Z]{5,14}$/;
let regexApellido = /^[A-Z]+[a-zA-Z]{5,14}$/;
let regexContra = /^(?=.{8,})[A-Z][a-zA-Z]+[0-9]{1,}$/;
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z._.-]+$/;

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validar();
});

function validar() {
    let errorNombre = false;
    let errorApellido = false;
    let errorContra1 = false;
    let errorContra2 = false;
    let errorEmail = false;
    const nombre = document.querySelector("#name").value;
    const apellido = document.querySelector("#surname").value;
    const contrasenia = document.querySelector("#password").value;
    const contraseniaRepetida = document.querySelector("#repeatPassword").value;
    const email = document.querySelector("#email").value;
    let errorMessageEmail = "";
    let errorMessageNombre = "";
    let errorMessageApellido = "";
    let errorMessageContra1 = "";
    let errorMessageContra2 = "";

    //validacion email
    if (!regexEmail.test(email)) {
        errorEmail = true;
        errorMessageEmail += "<p>No es un email valido</p>";
        document.getElementById("mensaje7").innerHTML = errorMessageEmail;
    } else {
        document.getElementById("mensaje7").innerHTML = "";
    }

    //validacion nombre
    if (!regexNombre.test(nombre)) {
        errorNombre = true;
        errorMessageNombre += "<p>No es un nombre valido</p>";
        document.getElementById("mensaje8").innerHTML = errorMessageNombre;
    } else {
        document.getElementById("mensaje8").innerHTML = "";
    }

    //validacion apellido
    if (!regexApellido.test(apellido)) {
        errorApellido = true;
        errorMessageApellido += "<p>No es un apellido valido</p>";
        document.getElementById("mensaje9").innerHTML = errorMessageApellido;
    } else {
        document.getElementById("mensaje9").innerHTML = "";
    }

    //validacion contrasenia
    if (!regexContra.test(contrasenia)) {
        errorContra1 = true;
        errorMessageContra1 += "<p>No es una contraseña valida</p>";
        document.getElementById("mensaje10").innerHTML = errorMessageContra1;
    } else if (contrasenia != contraseniaRepetida) {
        console.log(contrasenia)
        console.log(contraseniaRepetida)
        document.getElementById("mensaje10").innerHTML = "";
        errorContra2 = true;
        errorMessageContra2 += "<p>Las contraseñas no coniciden</p>";
        document.getElementById("mensaje11").innerHTML = errorMessageContra2;
    } else {
        document.getElementById("mensaje11").innerHTML = "";
        document.getElementById("mensaje12").innerHTML = "";
    }

    if (!(errorApellido && errorContra1 && errorContra2 && errorEmail && errorNombre)) {
        submit();
        document.getElementById("mensaje12").innerHTML = "";
    };
}

function submit() {
    let nuevoUsuario = {
        email: document.getElementById("email").value,
        nombre: document.getElementById("name").value,
        apellido: document.getElementById("surname").value,
        contrasenia: document.getElementById("password").value,
        contraseniaRepetida: document.getElementById("repeatPassword").value,
    }
    console.log(nuevoUsuario)
    localStorage.setItem("NewUser", JSON.stringify(nuevoUsuario));
}