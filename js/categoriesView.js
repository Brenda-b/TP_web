/*const resultado = document.querySelector("#resultado");
cursos.forEach((item) => {
    resultado.innerHTML += `<article>
    <p>Titulo: ${item.titulo}</p>
    <p>Modalidad: ${item.modalidad}</p>
    </article>`
});
const buscador = document.querySelector("#buscador");
buscador.addEventListener("keyup", () => {
    const valor = buscador.value;
    let cursosFiltrados = cursos.filter(curso => curso.titulo.indexOf(valor) > -1); //trae los que coincide
    resultado.innerHTML = ""; //vacia el section de resultados
    cursosFiltrados.forEach((item) => {
        resultado.innerHTML += `<article>
        <p>Titulo: ${item.titulo}</p>
        <p>Modalidad: ${item.modalidad}</p>
        </article>`
    });
});*/