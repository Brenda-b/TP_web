const pagar = document.querySelector("#botonPagar")

window.addEventListener("load", () => {
  let cantidad = JSON.parse(sessionStorage.getItem("carrito")) || ""
  if (cantidad != "") {
      const circulo = document.getElementById("cantidad");
      circulo.classList.add('cantidad');
      cantidadDeProductos = 0;
      cantidad.forEach((item) => {
          cantidadDeProductos += item.cant;
      })
      console.log(cantidadDeProductos)
      circulo.innerHTML = cantidadDeProductos;
  }
})

pagar.addEventListener("click", (e) => {
  e.preventDefault();
  modal.setContent(`<div class="textIcon2">
    <h1>Pagar</h1>
    </article>
    <article><img src="img/logo-tarjeta.png" alt="Icono de tarjeta"></article>
  </div>
  <form action="#">
    <div class="justifyLeft">
      <label for="tarjetas guardadas">Tarjetas guardadas</label>
      <select name="tarjetas guardadas" id="numeroTar" class="select">
      <option value="">--Seleccionar--</option>
    </select>
    </div>
    <div class="justifyLeft">
      <label for="tarjetas guardadas">Otra tarjeta</label>
      <input type="checkbox" id="new-card" value="Nueva-tarjeta" onchange="NuevosDatos()" class="campo5" />
    </div>
    <div class="justifyLeft displayNone" id="newCard">
      <div class="justifyLeft">
        <label for="numeroTar">Número tarjeta</label>
        <input type="text" name="numeroTar" id="numeroTar2" maxlength="16" class="select campo1"
          placeholder="Número de tarjeta" required />
        <div class="campo2">
          <label for="codigoCvv">Código</label>
          <input type="text" name="codigoCvv" id="codigoCvv" class="selectLittle" maxlength="4" placeholder="Cod."
          required />
          <label for="vencimiento">Vencimiento</label>
          <input type="text" name="vencimiento" id="vencimiento" class="selectLittle" placeholder="Vto." required />
      </div>
        <label for="titular">Nombre titular</label>
        <input type="text" name="titular" id="titular" required placeholder="Nombre titular" class="select campo3" />
      </div>
    </div>
    <div class="justifyLeft">
      <label for="direcciones guardadas">Direcciones</label>
      <select name="direcciones guardadas" id="direccion" class="select campo4">
        <option value="">--Seleccionar--</option>
      </select>
    </div>
    <label for="direcciones guardadas">Otra direccion</label>
    <input type="checkbox" id="new-adress" value="Nueva-direccion" />
    <div class="button justifyCenter">
      <input type="submit" value="Pagar" class="submit" id="submitPago"/>
    </div>
  </form>`)
  modal.open();
  const selectTarjetas = document.querySelector("#numeroTar")
  const selectDirecciones = document.querySelector("#direccion")
  const allTarjetas = JSON.parse(sessionStorage.getItem("tarjetas")) || ""
  const allDirecciones = JSON.parse(sessionStorage.getItem("direcciones")) || ""
  const form = document.querySelector("#submitPago");
  form.addEventListener("click", (e) => {
    e.preventDefault();
    newCarrito = [];
    sessionStorage.setItem("carrito", JSON.stringify(newCarrito));
    alert("Pago realizado");
    location.reload();
    modal.close();
  })
  if (allTarjetas != "") {
    allTarjetas.forEach(item => {
      let option = document.createElement("option");
      option.value = item.id;
      let texto = document.createTextNode(item.alias);
      option.appendChild(texto);
      selectTarjetas.appendChild(option);
    });
  }
  if (allDirecciones != "") {
    allDirecciones.forEach(item => {
      let option = document.createElement("option");
      option.value = item.id;
      let texto = document.createTextNode(item.alias);
      option.appendChild(texto);
      selectDirecciones.appendChild(option);
    });
  }
})

function NuevosDatos() {
  if (document.getElementById('new-card').checked == true) {
    document.getElementById('newCard').style.display = "block";
  } else {
    document.getElementById('newCard').style.display = "none";
  }
}

window.addEventListener("load", () => {
  imprimirCarrito();
});

function imprimirCarrito() {
  const carrito = JSON.parse(sessionStorage.getItem("carrito")) || "";
  console.log(carrito)
  if (carrito != "") {
    carrito.forEach((item) => {
      crearFilaArticulo(item.nombre, item.cant, item.precio, item.id);
    })
  }
}

function crearFilaArticulo(nombre, cant, precio, id) {
  const tabla = document.querySelector("#cart")
  let row1 = document.createElement("tr");
  row1.setAttribute("idFila", id);
  let column1 = document.createElement("td");
  let column2 = document.createElement("td");
  let column3 = document.createElement("td")
  let column4 = document.createElement("td")
  let texto1 = document.createTextNode(nombre);
  let texto2 = document.createTextNode(cant);
  let texto3 = document.createTextNode("$" + precio * cant);
  let botonBorrar = document.createElement("a");
  let trashCan = document.createElement("img");
  trashCan.src = "img/icono-basura.png";
  tabla.appendChild(row1);
  row1.appendChild(column1);
  row1.appendChild(column2);
  row1.appendChild(column3);
  row1.appendChild(column4);
  column1.appendChild(texto1);
  column2.appendChild(texto2);
  column3.appendChild(texto3);
  column4.appendChild(botonBorrar);
  botonBorrar.appendChild(trashCan);
  //Al presionar en el icono de "basura" se elimina la columna seleccionada
  botonBorrar.addEventListener("click", (e) => {
    let filaAEliminar = e.target.parentNode.parentNode.parentNode;
    let articuloID = row1.getAttribute("idFila");
    filaAEliminar.remove();
    eliminarDeSessionStorage(articuloID);
  })

  function eliminarDeSessionStorage(articuloID) {
    let carrito = JSON.parse(sessionStorage.getItem("carrito"));
    let indexCarrito = carrito.findIndex(element => element.id === articuloID);
    carrito.splice(indexCarrito, 1);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    const circulo = document.getElementById("cantidad")
    circulo.classList.add('cantidad');
    circulo.innerHTML = carrito.length;
  }
}