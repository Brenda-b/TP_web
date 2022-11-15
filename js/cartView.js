const pagar = document.querySelector("#botonPagar");


pagar.addEventListener("click", (e) => {
  e.preventDefault();
  modal.setContent(`<div class="textIcon2">
    <h1>Pagar</h1>
    </article>
    <article><img src="img/logo-tarjeta.png" alt="Icono de tarjeta"></article>
  </div>
  <div class="justifyLeft">
    <label for="tarjetas guardadas">Tarjetas guardadas</label>
    <select name="tarjetas guardadas" id="numeroTar" required class="select">
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
    <select name="direcciones guardadas" id="direccion" required class="select campo4">
      <option value="">--Seleccionar--</option>
    </select>
  </div>
  <label for="direcciones guardadas">Otra direccion</label>
  <input type="checkbox" id="new-adress" value="Nueva-direccion" />
  <div class="button justifyCenter">
    <input type="submit" value="Pagar" class="submit" />
  </div>`)
  modal.open();
  const selectTarjetas = document.querySelector("#numeroTar")
  const selectDirecciones = document.querySelector("#direccion")
  const allTarjetas = JSON.parse(sessionStorage.getItem("tarjetas")) || ""
  const allDirecciones = JSON.parse(sessionStorage.getItem("direcciones")) || ""
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