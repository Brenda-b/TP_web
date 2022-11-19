let productos = [
    {
        id: 1,
        nombre:'Paquete de fideos Matarazzo',
        foto: 'img/paquete-de-fideos.jpg',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem! Blanditiis non voluptates et illo cupiditate fuga eos, id minus voluptatem ut sed maxime impedit hic eum ex voluptas laboriosam?',
        precio: 100,
        cant: getCantidad()
    },
    {
        id: 2,
        nombre:' Aceite Cocinero',
        foto: 'img/aceite-cocinero.webp',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem! Blanditiis non voluptates et illo cupiditate fuga eos, id minus voluptatem ut sed maxime impedit hic eum ex voluptas laboriosam? ',
        precio: 150,
        cant: getCantidad()
    },
    {
        id: 3,
        nombre: 'Arroz Luchetti',
        foto: 'img/arroz-luccheti.jpg',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem! Blanditiis non voluptates et illo cupiditate fuga eos, id minus voluptatem ut sed maxime impedit hic eum ex voluptas laboriosam?',
        precio: 75,
        cant: getCantidad()
    },
    {
        id: 4,
        nombre: 'Capelettinis Giacomo',
        foto: 'img/capeletinis.jpg',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quidem! Blanditiis non voluptates et illo cupiditate fuga eos, id minus voluptatem ut sed maxime impedit hic eum ex voluptas laboriosam? ',
        precio: 300,
        cant: getCantidad()
    },
];
function getCantidad(){
    let lastCantidad = sessionStorage.getItem("lastCantidad") || "0";
    let newCantidad = JSON.parse(lastCantidad) + 1;
    sessionStorage.setItem("lastCantidad", JSON.stringify(newCantidad));
    return newCantidad;
}