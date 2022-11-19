
const contenedorProductos = document.getElementById('contenedor-productos');

/*let productos = [
    {
        id: 1,
        nombre:'Paquete de fideos Matarazzo',
        foto: 'img/paquete-de-fideos.jpg',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem! Blanditiis non voluptates et illo cupiditate fuga eos, id minus voluptatem ut sed maxime impedit hic eum ex voluptas laboriosam?',
        precio: 100
    },
    {
        id: 2,
        nombre:' Aceite Cocinero',
        foto: 'img/aceite-cocinero.webp',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem! Blanditiis non voluptates et illo cupiditate fuga eos, id minus voluptatem ut sed maxime impedit hic eum ex voluptas laboriosam? ',
        precio: 150
    },
    {
        id: 3,
        nombre: 'Arroz Luchetti',
        foto: 'img/arroz-luccheti.jpg',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem! Blanditiis non voluptates et illo cupiditate fuga eos, id minus voluptatem ut sed maxime impedit hic eum ex voluptas laboriosam?',
        precio: 75
    },
    {
        id: 4,
        nombre: 'Capelettinis Giacomo',
        foto: 'img/capeletinis.jpg',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem! Blanditiis non voluptates et illo cupiditate fuga eos, id minus voluptatem ut sed maxime impedit hic eum ex voluptas laboriosam? ',
        precio: 300
    },
];*/

let carrito = JSON.parse(sessionStorage.getItem("carrito")) || "";
if (carrito == "") {
    carrito = [];
}

window.addEventListener("load", () => {
    let cantidad = JSON.parse(sessionStorage.getItem("carrito")) || ""
    if (cantidad == "") {
        
    }
    else{
        const circulo = document.getElementById("cantidad");
        circulo.classList.add('cantidad');
        circulo.innerHTML = cantidad.length;
    }

})

productos.forEach((articulo) => {
    const section = document.createElement('section');
    section.classList.add('articulo');
    section.innerHTML = ` 
    <article class="popularProduct">
        <div >
        <a href="productView.html"><img src="${articulo.foto}" width= 100%></a>
        </div>
        <p>$${articulo.precio}</p>
        <h4>${articulo.nombre}</h4>
        <div class="buttonBuy">
            <form action="#" id="form">
                <input type="number" name="cantidadProd" id="cantidad" value="1" min="1" max="99">
                <button id="agregar${articulo.id}">Agregar</button>
            </form>
        </div>
    </article>
    <br><br>
    `


    contenedorProductos.appendChild(section)

    const boton = document.getElementById(`agregar${articulo.id}`);

    boton.addEventListener('click', (e) => {
        e.preventDefault();
        agregarAlCarrito(articulo.id);
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
        const circulo = document.getElementById("cantidad")
        circulo.classList.add('cantidad');
        circulo.innerHTML = carrito.length;
    });
});

//Para agregar un cambio
const agregarAlCarrito = (prodId) => {
    //traigo el producto en el que el id coincida con el prodId que recibo por parametro
    const item = productos.find((prod) => prod.id === prodId)
    carrito.push(item);
};




