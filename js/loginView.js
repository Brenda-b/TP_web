document.querySelector(".submit").disabled = true ;
const user      = document.getElementById("user1");
const password  = document.getElementById ("password");
const form      = document.querySelector ("form");
let userState   = false;
let passwordState = false;

function validar(){
    if (user.value.length >= 5){
        userState = true;
    }
    else if (user.value.length < 5){
        userState = false;
    }
    if (password.value.length >= 5){
        passwordState = true;
    }
    else if (password.value.length < 5){
        passwordState = false;
    }
    if (userState && passwordState == true){
        document.querySelector(".submit").disabled = false ;
    }
    else{
        document.querySelector(".submit").disabled = true ;
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    submit();
});

function submit(){
    let newUser = {
        usuario: user.value,
        contraseña: password.value
    }
    localStorage.setItem("newUser", JSON.stringify(newUser));
}
