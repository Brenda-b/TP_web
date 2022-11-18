/*let productos = [
    {
        id: 1,
        nombre: "Paquete de fideos Matarazzo",
        foto: `url(img/paquete-de-fideos.jpg)`,
        descripcion: "fawf awfawfawf awf aw faw fawf awf ",
        precio: 100
    },
    {
        id: 2,
        nombre: "Aceite Cocinero",
        foto: `url(img/aceite-cocinero.webp)`,
        descripcion: "fawf awfawfawf awf aw faw fawf awf ",
        precio: 150
    },
    {
        id: 3,
        nombre: "Arroz Luchetti",
        foto: `url(img/arroz-luccheti.jpg)`,
        descripcion: "fawf awfawfawf awf aw faw fawf awf ",
        precio: 75
    },
    {
        id: 4,
        nombre: "Capelettinis Giacomo",
        foto: `img/capeletinis.jpg`,
        descripcion: "fawf awfawfawf awf aw faw fawf awf ",
        precio: 300
    }
]
const form = document.querySelector("#form");
const titulo = document.querySelector("h2");
const descripcion = document.querySelector("#descripcion");
const precio = document.querySelector("#precio");
const foto = document.querySelector("#productID");

const aceite = document.querySelector("#aceite_cocinero");
const arroz = document.querySelector("#arroz_luchetti");
const capeletinis = document.querySelector("#capelettinis_giacomo");
*/
const vistaProducto= document.getElementById("descripcionProducto")

productos.forEach((articulo) =>{
    const section= document.createElement('section');
    section.classList.add('articulo');
    section.innerHTML=` 
    <article>
        <div >
            <div class="productID">
            <img src="${articulo.foto}">
            </div>
            <p id="precio">$${articulo.precio}</p>
        </div>
    </article>
    <article>
        <h2>${articulo.nombre}</h2>
        <div id="descripcion">
            <p>${articulo.descripcion}</p>
            <p>${articulo.descripcion}</p>
            <p>${articulo.descripcion}</p>
            <p>${articulo.descripcion}</p>
            <p>${articulo.descripcion}</p>
            <p>${articulo.descripcion}</p>
            <p>${articulo.descripcion}</p>
        </div>
        <div class="buttonBuy">
            <form action="#" method="get" id="form">
                <input type="number" name="cantidadProd" id="cantidadProd" value="1" min="1" max="99">
                <button id="agregar${articulo.id}">Agregar</button>
            </form>
        </div>
    </article>
    `
    
    
    contenedorProductos.appendChild(section)

    const boton=document.getElementById(`agregar${articulo.id}`);
    
    boton.addEventListener('click', () => {
        agregarAlCarrito(articulo.id);
        console.log(carrito)
    });
} );

/*aceite.addEventListener("click", (item) => {
    item.preventDefault;
    titulo.innerHTML = "";
    precio.innerHTML = "";
    let elemento = productos.filter(productos => productos.nombre == "Aceite Cocinero");

    elemento.forEach(item => {
        titulo.innerHTML = item.nombre;
        precio.innerHTML = "$" + item.precio;
        foto.style.backgroundImage = item.foto;
    });
})

arroz.addEventListener("click", (item) => {
    item.preventDefault;
    titulo.innerHTML = "";
    precio.innerHTML = "";
    let elemento = productos.filter(productos => productos.nombre == "Arroz Luchetti");

    elemento.forEach(item => {
        titulo.innerHTML = item.nombre;
        precio.innerHTML = "$" + item.precio;
        foto.style.backgroundImage = item.foto;
    });

})

capeletinis.addEventListener("click", (item) => {
    item.preventDefault;
    titulo.innerHTML = "";
    precio.innerHTML = "";
    let elemento = productos.filter(productos => productos.nombre == "Capelettinis Giacomo");

    elemento.forEach(item => {
        titulo.innerHTML = item.nombre;
        precio.innerHTML = "$" + item.precio;
        foto.style.backgroundImage = item.foto;
    });

})*/
//funcionalidad del carrito
form.addEventListener("submit", (item) => {
    item.preventDefault();
    const circulo = document.querySelector("#cantidad")
    const cantProd = document.querySelector("#cantidadProd")
    circulo.classList.add('cantidad');
    circulo.innerHTML = cantProd.value;
});

