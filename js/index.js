const contenedorProductos = document.getElementById('contenedor-productos');

let carrito = JSON.parse(sessionStorage.getItem("carrito")) || "";
if (carrito == "") {
    carrito = [];
}

window.addEventListener("load", () => {
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
})

productos.forEach((articulo) => {
    const section = document.createElement('section');
    section.classList.add('articulo');
    section.innerHTML = ` 
    <article class="popularProduct">
        <div >
        <a href="productView.html" id="productoSeleccionado"><img src="${articulo.foto}" width= 100%></a>
        </div>
        <p>$${articulo.precio}</p>
        <h4>${articulo.nombre}</h4>
        <div class="buttonBuy">
            <form action="#" id="form">
                <input type="number" name="cantidadProd" id="cantidad${articulo.id}" value="1" min="1" max="99">
                <button id="agregar${articulo.id}">Agregar</button>
            </form>
        </div>
    </article>
    <br><br>
    `
    contenedorProductos.appendChild(section)

    const boton = document.getElementById(`agregar${articulo.id}`);
    const inputCantidad = document.getElementById(`cantidad${articulo.id}`) 

    boton.addEventListener('click', (e) => {
        e.preventDefault();
        agregarAlCarrito(articulo.id, inputCantidad);
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
        const circulo = document.getElementById("cantidad")
        circulo.classList.add('cantidad');
        cantidadDeProductos = 0;
        circulo.innerHTML = cantidad.length;
        carrito.forEach((item) => {
            cantidadDeProductos += item.cant;
        })
        circulo.innerHTML = cantidadDeProductos;
    });
});

const agregarAlCarrito = (prodId, inputCantidad) => {
    const existe = carrito.some(prod => prod.id === prodId) 
    if (existe) { 
        const prod = carrito.map(prod => { 
            if (prod.id === prodId) {
                prod.cant += parseInt(inputCantidad.value)
            }
        })
    } else { 
        const item = productos.find((prod) => prod.id === prodId)
        item.cant = parseInt(inputCantidad.value)
        carrito.push(item)
    }
};




