const form = document.querySelector("form");
let regexNumero=/^[0-9]+$/;

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validar();
});

function validar(){
    let error = false;
    let errorMessaje = "";
    let telefono = document.getElementById ("telefono").value;
    let piso = document.getElementById ("piso").value;
    let depto = document.getElementById ("departamento").value;
    if (!regexNumero.test(telefono)){
        error = true;
        errorMessaje += "<p>El formato del número no es correcto</p>";
    }
    if (!regexNumero.test(piso)){
        error = true;
        errorMessaje += "<p>El formato del piso no es correcto</p>";
    }
    if(!regexNumero.test(depto)){
        error = true;
        errorMessaje += "<p>El formato del departamento no es correcto</p>";
    }
    if (error){
        document.getElementById("mensaje").innerHTML = errorMessaje;
    }
    else{
        submit();
        document.getElementById("mensaje").innerHTML = "";
    }

}

function submit(){
    let adress ={
        alias : document.getElementById ("alias").value,
        provincia: document.getElementById ("provincias").options[provincias.selectedIndex].text,
        localidad: document.getElementById ("localidades").options[localidades.selectedIndex].text,
        direccion: document.getElementById ("direccion").value,
        telefono: document.getElementById ("telefono").value,
        piso: document.getElementById ("piso").value,
        departamento: document.getElementById ("departamento").value 
    }
    localStorage.setItem("newAdress", JSON.stringify(adress));
}