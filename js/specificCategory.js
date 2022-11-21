let cantidad = JSON.parse(sessionStorage.getItem("carrito")) || ""
if (cantidad != "") {
    const circulo = document.getElementById("cantidad");
    circulo.classList.add('cantidad');
    cantidadDeProductos = 0;
    circulo.innerHTML = cantidad.length;
    cantidad.forEach((item) => {
        cantidadDeProductos += item.cant;
    })
    circulo.innerHTML = cantidadDeProductos;
}