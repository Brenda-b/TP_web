const form = document.getElementById("newForm")

window.addEventListener("load", () => {
    let cantidad = JSON.parse(sessionStorage.getItem("carrito")) || ""
    if (cantidad != "") {
        const circulo = document.getElementById("cantidad");
        circulo.classList.add('cantidad');
        cantidadDeProductos = 0;
        cantidad.forEach((item) => {
            cantidadDeProductos += item.cant;
        })
        console.log(cantidadDeProductos)
        circulo.innerHTML = cantidadDeProductos;
    }
  })

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


