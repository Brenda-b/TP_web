const direccion = document.querySelector("#agregarDireccion")
const tarjeta = document.querySelector("#agregarTarjeta")
let regexNumero = /^[0-9]+$/;
let regexTarjeta = /^\d{10}$/;
let regexAlias = /^[a-zA-Z._.-]{5,10}$/;
let regexCod = /^\d{3}$/;
let regexVenc = /^\d{2}[- /.]\d{2}$/;
let regexTitular = /^[a-zA-Z._.-]{5,15}$/;

direccion.addEventListener("click", (e) => {
    modal.setContent(`<section>
        <div class="textIcon">
            <article>
                <h1>Nueva dirección</h1>
            </article>
            <article><img src="img/icono-casita.png" alt="IconoDeCasa"></article>
        </div>
        <form action="#" autocomplete="off" id="form">
            <div class="justify">
                <label for="alias">Alias</label>
                <input type="text" name="alias" id="alias" placeholder="Alias" size="27" required> <br>

                <label for="provincias">Provincia</label>
                <select name="provincias" id="provincias" required class="select">
                    <option value="">--Seleccionar--</option>
                    <option value="1">Buenos Aires</option>
                    <option value="2">CABA</option>
                    <option value="3">Catamarca</option>
                    <option value="4">Chaco</option>
                    <option value="5">Chubut</option>
                    <option value="6">Córdoba</option>
                    <option value="7">Corrientes</option>
                    <option value="8">Entre Ríos</option>
                    <option value="9">Formosa</option>
                    <option value="10">Jujuy</option>
                    <option value="11">La Pampa</option>
                    <option value="12">La Rioja</option>
                    <option value="13">Mendoza</option>
                    <option value="14">Misiones</option>
                    <option value="15">Neuquén</option>
                    <option value="16">Río Negro</option>
                    <option value="17">Salta</option>
                    <option value="18">San Juan</option>
                    <option value="19">San Luis</option>
                    <option value="20">Santa Cruz</option>
                    <option value="21">Santa Fe</option>
                    <option value="22">Santiago del Estero</option>
                    <option value="23">Tierra del Fuego</option>
                    <option value="24">Tucumán</option>
                </select> <br>

                <label for="localidades">Localidad</label>
                <select name="localidades" id="localidades" class="select">
                    <option value="">--Seleccionar--</option>
                    <option value="1">Castelar</option>
                    <option value="2">El Palomar</option>
                    <option value="3">Haedo</option>
                    <option value="4">Morón</option>
                    <option value="5">Villa Sarmiento</option>
                </select> <br>

                <label for="direccion">Dirección</label>
                <input type="text" name="direccion" id="direccion" placeholder="Dirección" required size="27"> <br>

                <label for="telefono">Teléfono</label>
                <input type="tel" name="telefono" id="telefono" placeholder="Teléfono" required size="27"><br>

                <section>
                    <label for="piso">Piso</label>
                    <input type="text" name="piso" id="piso" size="3" maxlength="2" placeholder="Piso">
                
                    <label for="departamento">Departamento</label>
                    <input type="text" name="departamento" id="departamento" placeholder="Dto." size="3" maxlength="2"><br>
                </section>
                <div>
                    <input type="submit" value="Guardar" class="submit">
                </div>
                <div id="mensaje" class="errorText"></div>
            </div>
        </form>
    </section>`)
    modal.open();
    let form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        validarDireccion();
    })
})

tarjeta.addEventListener("click", (e) => {
    modal.setContent(`<section>
    <div class="textIcon">
        <article>
            <h1>Nueva tarjeta</h1>
        </article>
        <article><img src="img/logo-tarjeta.png" alt="Icono de tarjeta"></article>
    </div>
    <form action="#" method="post" id="form">
        <div class="justify">
            <label for="alias">Alias</label>
            <input type="text" name="alias" id="alias" maxlength="20" size="23" placeholder="Alias"><br>
            <label for="numeroTar">Número tarjeta</label>
            <input type="text" name="numeroTar" id="numeroTar" maxlength="10" size="23"
                placeholder="Número de tarjeta" required><br>
            <section>
                <label for="codigoCvv">Código</label>
                <input type="text" name="codigoCvv" id="codigoCvv" size="2" maxlength="3" placeholder="Cod."
                    required>
                <label for="vencimiento">Vencimiento</label>
                <input type="text" name="vencimiento" id="vencimiento" placeholder="Vto." size="2" maxlength="5"
                    required><br>
            </section>
            <label for="titular">Nombre titular</label>
            <input type="text" name="titular" id="titular" required placeholder="Nombre titular" size="23"><br>
            <div class="button">
                <input type="submit" value="Guardar" class="submit">
            </div>
            <span id="mensaje1" class="errorText"></span>
            <span id="mensaje2" class="errorText"></span>
            <span id="mensaje3" class="errorText"></span>
            <span id="mensaje4" class="errorText"></span>
            <span id="mensaje5" class="errorText"></span>
            <span id="mensaje6" class="errorText"></span>
    </form>
</section>`);
    modal.open();
    let form = document.getElementById ("form");
    form.addEventListener ("submit", (e)=>{
        e.preventDefault();
        validarTarjeta();
    })
}
)

function validarDireccion() {
    let error = false;
    let errorMessaje = "";
    let telefono = document.getElementById("telefono").value;
    let piso = document.getElementById("piso").value;
    let depto = document.getElementById("departamento").value;
    if (!regexNumero.test(telefono)) {
        error = true;
        errorMessaje += "<p>El formato del teléfono no es correcto</p>";
    }
    if (!regexNumero.test(piso)) {
        error = true;
        errorMessaje += "<p>El formato del piso no es correcto</p>";
    }
    if (!regexNumero.test(depto)) {
        error = true;
        errorMessaje += "<p>El formato del departamento no es correcto</p>";
    }
    if (error) {
        document.getElementById("mensaje").innerHTML = errorMessaje;
    }
    else {
        submitDireccion();
        modal.close();
        alert("Direcciòn subida correctamente")
        form.reset();
    }

}

function submitDireccion() {
    let adress = {
        alias: document.getElementById("alias").value,
        provincia: document.getElementById("provincias").options[provincias.selectedIndex].text,
        localidad: document.getElementById("localidades").options[localidades.selectedIndex].text,
        direccion: document.getElementById("direccion").value,
        telefono: document.getElementById("telefono").value,
        piso: document.getElementById("piso").value,
        departamento: document.getElementById("departamento").value
    }
    localStorage.setItem("newAdress", JSON.stringify(adress));
}

function validarTarjeta() {
    let errorTarjeta = false;
    let errorAlias = false;
    let errorCod = false;
    let errorVenc = false;
    let errorTitular = false;
    const numTarjeta = document.querySelector("#numeroTar").value;
    const alias = document.querySelector("#alias").value;
    const codigo = document.querySelector("#codigoCvv").value;
    const vencimiento = document.querySelector("#vencimiento").value;
    const titular = document.querySelector("#titular").value;
    let errorMessageTar = ""
    let errorMessageAlias = ""
    let errorMessageCod = ""
    let errorMessageVenc = ""
    let errorMessageTitular = ""
    let suma = 0;

    //Validacion alias
    if (!regexAlias.test(alias)) {
        errorAlias = true;
        errorMessageAlias += "<p>No es un alias valido</p>";
        document.getElementById("mensaje2").innerHTML = errorMessageAlias;
    } else {
        document.getElementById("mensaje2").innerHTML = "";
    }

    for (var i = 0; i < numTarjeta.length - 1; i++) {
        suma += parseInt(numTarjeta[i]);
    }

//Validacion Numero de tarjeta
    if (!regexTarjeta.test(numTarjeta)) {
        errorTarjeta = true;
        errorMessageTar += "<p>No es un numero de tarjeta valido</p>"
        document.getElementById("mensaje1").innerHTML = errorMessageTar;
    } else {
        if ((numTarjeta[numTarjeta.length - 1] % 2 != 0) && (suma % 2 != 0)) {
            errorMessageTar += "<p>No es un numero de tarjeta valido</p>"
            document.getElementById("mensaje1").innerHTML = errorMessageTar;
        } else {
            if ((numTarjeta[numTarjeta.length - 1] % 2 == 0) && (suma % 2 == 0)) {
                errorTarjeta = true;
                errorMessageTar += "<p>No es un numero de tarjeta valido</p>"
                document.getElementById("mensaje1").innerHTML = errorMessageTar;
            } else {
                document.getElementById("mensaje1").innerHTML = ""
            }
        }
    }
    //Validacion Codigo CVV
    if (!regexCod.test(codigo)) {
        errorCod = true;
        errorMessageCod += "<p>No es un codigo CVV valido</p>";
        document.getElementById("mensaje3").innerHTML = errorMessageCod;
    } else {
        document.getElementById("mensaje3").innerHTML = "";
    }

//Validacion vencimiento
    if (!regexVenc.test(vencimiento)) {
        errorVenc = true;
        errorMessageVenc += "<p>No es un vencimiento valido</p>";
        document.getElementById("mensaje4").innerHTML = errorMessageVenc;
    } else {
        document.getElementById("mensaje4").innerHTML = "";
    }

    //Validacion nombre del titular
    if (!regexTitular.test(titular)) {
        errorTitular = true;
        errorMessageTitular += "<p>No es un nombre valido</p>";
        document.getElementById("mensaje5").innerHTML = errorMessageTitular;
    } else {
        document.getElementById("mensaje5").innerHTML = "";
    }

    if (!(errorTarjeta && errorAlias && errorCod && errorVenc && errorTitular)) {
        submitTarjeta();
        modal.close();
        alert("Tarjeta subida correctamente")
        form.reset();
    }
}

function submitTarjeta() {
    let metodoDePago = {
        alias: document.getElementById("alias").value,
        numero: document.getElementById("numeroTar").value,
        codigo: document.getElementById("codigoCvv").value,
        vencimiento: document.getElementById("vencimiento").value,
        titular: document.getElementById("titular").value,
    }
    console.log(metodoDePago)
    localStorage.setItem("NewCard", JSON.stringify(metodoDePago));
}





