const producto = [
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

/*let cart=[];
const divisa ='$';
const domItems= document.querySelector'#productID');
const domCart= document.querySelector'#cart');
const domTotal= document.querySelector'#total');
const domEliminar= document.querySelector'#eliminar');

function renderizarProductos(){
    productos.forEach ((info) => {
        //estructura
        const miEstructura = document.createElement('div');
        miEstructura.id. 
    })
}*/


const productosContenerdor = document.getElementById('productos');

function comprarProducto(e){
    alert(`gracias por su compra ${e.target.parentNode.dataset.producto}`)
};

function renderizarProductos(producto){
    const articulo= document.createElement('article');
    articulo.dataset.producto= producto.id;

    const nombre= document.createElement('h4');
    const foto= document.createElement('img');
    
    const descripcion= document.createElement('p');
    const precio= document.createElement('p');
    const agregar= document.createElement('button');
    
    
    nombre.textContent=producto.nombre;
    foto.src= producto.foto;
    foto.alt=producto.nombre;
    foto.className= 'productID';
    descripcion.textContent=producto.descripcion;
    descripcion.className='descripcionP';
    precio.textContent=producto.precio;

    agregar.textContent= 'agregar';
    agregar.addEventListener('click', comprarProducto);
    

    articulo.appendChild(nombre);
    articulo.appendChild(foto);
    
    articulo.appendChild(descripcion);
    articulo.appendChild(precio);
    articulo.appendChild(agregar);




    productosContenerdor.appendChild(articulo);


}
producto.forEach(renderizarProductos);