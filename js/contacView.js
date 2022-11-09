const form = document.getElementById("newForm")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    submit();
});

function submit(){
    const nombre = document.querySelector (".name1");
    const email = document.querySelector (".email1");
    const comentario = document.getElementById ("comentarios")
    let newQuery = {
        nombre: nombre.value,
        email: email.value,
        comentario: comentario.value
    }
    localStorage.setItem("newQuery", JSON.stringify(newQuery));
    alert ("Consulta enviada con éxito")
    form.reset();
}


