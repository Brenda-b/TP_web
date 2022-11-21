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


const form = document.querySelector("#form");
const titulo = document.querySelector("h2");
const descripcion = document.querySelector("#descripcion");
const precio = document.querySelector("#precio");
const foto = document.querySelector("#productID");

let carrito = JSON.parse(sessionStorage.getItem("carrito")) || "";
if (carrito == "") {
    carrito = [];
}

const boton = document.getElementById("agregar");
const inputCantidad = document.getElementById ("cantidadProd");
let articulo = productos.find (((prod) => prod.id === 1))

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
