const categorias = [
    {
        titulo: 'Almacen',
        image: "img/almacen.png"
    },
    {
        titulo: 'Bebidas',
        image: "img/bebidas_alcoholicas.png"
    },
    {
        titulo: 'Mascotas',
        image: "img/mascotas.png"
    },
    {
        titulo: 'Limpieza',
        image: "img/limpieza.png"
    },
    {
        titulo: 'Cuidado Personal',
        image: "img/cuidado_personal.png"
    },
    {
        titulo: 'Bebés',
        image: "img/bebes.png"
    },
    {
        titulo: 'Mobiliario',
        image: "img/mobiliario.png"
    },
    {
        titulo: 'Indumentaria',
        image: "img/indumentaria.png"
    }
]

const resultado = document.querySelector("#filtroBuscador");
const buscador = document.querySelector("#buscar");
if (buscador != 0) {
    buscador.addEventListener("keyup", () => {
        const valor = buscador.value.toUpperCase(); //indexOf es sensible a las mayusculas y minusculas
        let categoriasFiltradas = categorias.filter(categoria => categoria.titulo.toUpperCase().indexOf(valor) > -1);
        resultado.innerHTML = ""; //vacia el section de resultados
        categoriasFiltradas.forEach((item) => {
            resultado.innerHTML +=
                `<div class="specificCategory">
            <article><img src=${item.image}></article>
            <article>
                <a href="specificCategory.html">
                    <h4>${item.titulo}</h4>
                </a>
            </article>
        </div>`
        })
    });
}