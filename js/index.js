
const contenedorProductos = document.getElementById('contenedor-productos');

let producto = [
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
    {
        id: 5,
        nombre: 'Capelettinis Giacomo',
        foto: 'img/capeletinis.jpg',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem! Blanditiis non voluptates et illo cupiditate fuga eos, id minus voluptatem ut sed maxime impedit hic eum ex voluptas laboriosam? ',
        precio: 700
    }
];

let carrito= [];

const agregarAlCarrito= (prodId) => {
    //traigo el producto en el que el id coincida con el prodId que recibo por parametro
    const item= producto.find((prod) => prod.id === prodId)
    carrito.push(item);


};

producto.forEach((articulo) =>{
    const section= document.createElement('section');
    section.classList.add('articulo');
    section.innerHTML=` 
    <article class="popularProduct">
        <div >
        <img src="${articulo.foto}" width= 100%>
        </div>
        <p>$${articulo.precio}</p>
        <h4>${articulo.nombre}</h4>
        <div class="buttonBuy">
            <form action="#">
                <input type="number" name="cantidad" id="cantidad" value="1" min="1" max="99">
                <button id="agregar${articulo.id}">Agregar</button>
            </form>
        </div>
    </article>
    `
    

    contenedorProductos.appendChild(section)

    const boton=document.getElementById('agregar${articulo.id}') ;

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
        console.log(carrito)
    });
} );


//Para agregar un cambio
