
const contenedorProductos = document.getElementById('contenedor-productos');

let producto = [
    {
        id: 1,
        nombre:'Paquete de fideos Matarazzo',
        foto: './img/paquete-de-fideos.jpg',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem! Blanditiis non voluptates et illo cupiditate fuga eos, id minus voluptatem ut sed maxime impedit hic eum ex voluptas laboriosam?',
        precio: 100
    },
    {
        id: 2,
        nombre:' Aceite Cocinero',
        foto: './img/aceite-cocinero.webp',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem! Blanditiis non voluptates et illo cupiditate fuga eos, id minus voluptatem ut sed maxime impedit hic eum ex voluptas laboriosam? ',
        precio: 150
    },
    {
        id: 3,
        nombre: 'Arroz Luchetti',
        foto: './img/arroz-luccheti.jpg',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem! Blanditiis non voluptates et illo cupiditate fuga eos, id minus voluptatem ut sed maxime impedit hic eum ex voluptas laboriosam?',
        precio: 75
    },
    {
        id: 4,
        nombre: 'Capelettinis Giacomo',
        foto: './img/capeletinis.jpg',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem! Blanditiis non voluptates et illo cupiditate fuga eos, id minus voluptatem ut sed maxime impedit hic eum ex voluptas laboriosam? ',
        precio: 300
    },
    {
        id: 5,
        nombre: 'Capelettinis Giacomo',
        foto: './img/capeletinis.jpg',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem! Blanditiis non voluptates et illo cupiditate fuga eos, id minus voluptatem ut sed maxime impedit hic eum ex voluptas laboriosam? ',
        precio: 700
    }
];

let carrito= [];


producto.forEach((articulos) =>{
    const section= document.createElement('section');
    section.classList.add('specificCategory');
    section.innerHTML=` 
    <section class="inline2 top">
        <div class="specificCategory">
            <article><img src=${articulos.foto}></article>
            <article>
                <a href="productView.html">
                    <h4>Ver detalle del producto</h4>
                </a>
            </article>
        </div>
    </section>
    `
    

    productosContenerdor.appendChild(section)
} );

const agregarAlCarrito= (prodId) => {
    //traigo el producto en el que el id coincida con el prodId que recibo por parametro
    const item= producto.find((prod) => prod.id === prodId)
    carrito.push(item)
};
