let productos = [
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
        foto: `url(img/capeletinis.jpg)`,
        descripcion: "fawf awfawfawf awf aw faw fawf awf ",
        precio: 300
    }
] 
const titulo = document.querySelector ("h2");
const descripcion = document.querySelector ("#descripcion");
const precio = document.querySelector ("#precio");
const foto = document.querySelector ("#productID");

const aceite = document.querySelector ("#aceite_cocinero");
const arroz = document.querySelector ("#arroz_luchetti");
const capeletinis = document.querySelector ("#capelettinis_giacomo");

aceite.addEventListener ("click", (item)=>{
    item.preventDefault;
    titulo.innerHTML = "";
    precio.innerHTML = "";
    let elemento = productos.filter (productos => productos.nombre == "Aceite Cocinero");
    
    elemento.forEach(item => {
        titulo.innerHTML = item.nombre;
        precio.innerHTML = "$" + item.precio;
        foto.style.backgroundImage = item.foto;
    });
    })

arroz.addEventListener ("click", (item)=>{
    item.preventDefault;
    titulo.innerHTML = "";
    precio.innerHTML = "";
    let elemento = productos.filter (productos => productos.nombre == "Arroz Luchetti");
    
    elemento.forEach(item => {
        titulo.innerHTML = item.nombre;
        precio.innerHTML = "$" + item.precio;
        foto.style.backgroundImage = item.foto;
    });
    
})

capeletinis.addEventListener ("click", (item)=>{
    item.preventDefault;
    titulo.innerHTML = "";
    precio.innerHTML = "";
    let elemento = productos.filter (productos => productos.nombre == "Capelettinis Giacomo");
    
    elemento.forEach(item => {
        titulo.innerHTML = item.nombre;
        precio.innerHTML = "$" + item.precio;
        foto.style.backgroundImage = item.foto;
    });
    
})

