const direccion = document.querySelector("#agregarDireccion")
const tarjeta = document.querySelector("#agregarTarjeta")
let regexNumero = /^[0-9]+$/;
let regexTarjeta = /^\d{10}$/;
let regexAlias = /^[a-zA-Z._.-]{5,10}$/;
let regexContra = /^(?=.{8,})[A-Z][a-zA-Z]+[0-9]{1,}$/;
let regexCod = /^\d{3}$/;
let regexVenc = /^\d{2}[- /.]\d{2}$/;
let regexTitular = /^[a-zA-Z._.-]{5,15}$/;
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z._.-]+$/;
let regexNombre = /^[A-Z]+[a-zA-Z]{5,30}$/;
let regexApellido = /^[A-Z]+[a-zA-Z]{5,14}$/;

let buenosAires = ["Avellaneda", "Bahía Blanca", "Campana", "Chascomús", "Florencio Varela", "Lanús", "La Matanza", "Morón"]
let caba = ["Comuna 1", "Comuna 2", "Comuna 3", "Comuna 4", "Comuna 5"];
let catamarca = ["Aconquija", "Ancasti", "Andagalá"];
let chaco = ["Avia Terai", "Campo Largo", "Charata"];
let chubut = ["Biedma", "Gaiman", "Rawson"];
let cordoba = ["Arroyito", "Cosquín", "Mina Clavero"];
let corrientes = ["Bella Vista", "Chavarría", "Colonia Libertad"];
let entreRios = ["Colón", "Paraná", "Concordia"];
let formosa = ["El Colorado", "Herradura", "Las Lomitas"];
let jujuy = ["Abra Pampa", "El Aguilar", "Humahuaca"];
let laPampa = ["Abramo", "General Pico", "Santa Rosa"];
let laRioja = ["Alpasinche", "Los Robles", "Villa Casana"];
let mendoza = ["Agua Escondida", "Cacheuta", "Junín"];
let misiones = ["Caá Yarí", "Garuhapé", "Pindapoy"];
let neuquen = ["Aluminé", "Junín de los Andes", "Loncopué"];
let rioNegro = ["Bariloche", "El Bolsón", "Los Menucos"];
let salta = ["Chicoana", "El Tipal", "Las Lajitas"];
let sanJuan = ["Albardón", "San Martín", "Santa Lucía"];
let sanLuis = ["El Cadillo", "Los Cerrillos", "Saladillo"];
let santaCruz = ["Las Heras", "Perito Moreno", "Río Gallegos"];
let santaFe = ["Acebal", "Berabevú", "Cayastá"];
let santiago = ["Añatuya", "Bandera", "Villa La Punta"];
let tierraDelFuego = ["Antártida Argentina", "Río Grande", "Ushuaia"];
let tucuman = ["Aguilares", "Bella Vista", "Concepción"];
//usuario de prueba para poder entrar a la vista
let usuarioDePrueba = [
    {
        usuarioID: getUsuarioID(),
        usuario: "prueba",
        contraseña: "prueba",
        email: "pepito@gmail.com",
        nombre: "Pepito",
        apellido: "Gonzales",
        direcciones: "",
        tarjetas: ""
    }
]
sessionStorage.setItem("usuarios", JSON.stringify(usuarioDePrueba));

//Se declara las direcciones vacias por default
let direcciones = [

]
//Se declaran las tarjetas vacias por default
let tarjetas = [

]
/*Funcion que verifica si el usuario esta logueado en el sistema. Se utiliza el
sessionStorage porque al cerrar la ventana, se borra todo el contenido almacenado*/
function isLogged() {
    if (sessionStorage.getItem("logeado") == "true") {
        return true
    }
    else return false
}
//Al cargar la pagina, se verifica si esta logueado, si no, te obliga a loggearte. Se abre el primer popUp
window.addEventListener("load", (e) => {
    if (!isLogged()) {
        modal2.setContent(`<div class="justifyCenter">
        <img src="img/logo.png" alt="Logo COTI">
    </div>
    <div class="justifyCenter">
        <form action="#" method="get" autocomplete="off">
            <div>
                <label for="user1">Usuario</label>
                <input type="text" name="user1" id="user1" placeholder="Ingrese usuario" required><br>
            </div>
            <div id="password2">
                <label for="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="Ingrese contraseña" required>
            </div>
    </div>
    <div class="justifyCenter">
        <p><a href="#">¿Olvidaste la contraseña?</a></p>
        <input type="submit" value="LOGIN" class="submit2">
        </form>
        <p>¿No tenés cuenta? <a href="#" id="modalNewUser">Registrate</a></p>
    </div>`)
        modal2.open();
        habilitarBoton();
        const form = document.querySelector(".submit2");
        const registrarse = document.querySelector("#modalNewUser");
        form.addEventListener("click", (e) => {
            e.preventDefault;
            submitUsuario();
        })
        //Al presionar "Registrarse" se abre un segundo popUp con la vista "newUser"
        registrarse.addEventListener("click", (e) => {
            modal2.close();
            e.preventDefault;
            modal3.setContent(`<div class="justifyCenter">
            <img src="img/logo.png" alt="Logo COTI">
        </div>
        <form action="#">
            <div class="justify">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" maxlength="30" class="select" placeholder="Ingrese usuario"><br>
                <label for="name">Nombre</label>
                <input type="text" name="name" id="name" maxlength="20" class="select" placeholder="Ingrese nombre"><br>
                <label for="surname">Apellido</label>
                <input type="text" name="surname" id="surname" maxlength="20" class="select"
                    placeholder="Ingrese apellido"><br>
                <label for="password3">Contraseña</label>
                <input type="password" name="password3" id="password3" maxlength="20" class="select"
                    placeholder="Ingrese contraseña"><br>
                <label for="repeatPassword">Repetir contraseña</label>
                <input type="password" name="repeatPassword" id="repeatPassword" maxlength="20" class="select"
                    placeholder="Ingrese contraseña"><br>
                <div class="inline2">
                    <div >
                        <input type="reset" value="Cancelar" class="submit" id="cancelar">
                    </div>
                    <div>
                        <input type="submit" value="Guardar" class="submit" id="subirNuevoUsuario">
                    </div>
                </div>
                <span id="mensajeNewUser" class="errorText"></span>
            </div>
        </form>`)
            modal3.open();
            cancelarRegistro = document.querySelector("#cancelar");
            cancelarRegistro.addEventListener("click", () => {
                modal3.close();
                modal2.open();
            })
            const form = document.querySelector("#subirNuevoUsuario");
            form.addEventListener("click", (e) => {
                e.preventDefault();
                validarNuevoUsuario();
            });
        })
    }
    //Si esta todo OK, se cargan todos los datos del usuario(nombres, direcciones, tarjetas)
    else {
        const titulo = document.querySelector("h2");
        const nombre = JSON.parse(sessionStorage.getItem("actualUser"))
        titulo.innerHTML = nombre.nombre + " " + nombre.apellido;
        imprimirDirecciones();
    }
})
//Funcion que habilita el submit si los campos "usuario" y "contraseña" tienen minimo 5 caracteres
function habilitarBoton() {
    document.querySelector(".submit2").disabled = true;
    const user = document.getElementById("user1");
    const password = document.getElementById("password");
    let userState = false;
    let passwordState = false;
    user.addEventListener("keyup", () => {
        if (user.value.length >= 5) {
            userState = true;
        }
        else if (user.value.length < 5) {
            userState = false
        }
        password.addEventListener("keyup", () => {
            if (password.value.length >= 5) {
                passwordState = true;
            }
            else if (password.value.length < 5) {
                passwordState = false
            }
            if (userState && passwordState == true) {
                document.querySelector(".submit2").disabled = false;
            }
            else {
                document.querySelector(".submit2").disabled = true;
            }
        });
        if (userState && passwordState == true) {
            document.querySelector(".submit2").disabled = false;
        }
        else {
            document.querySelector(".submit2").disabled = true;
        }
    });
}
//Funcion que se encarga de verificar si los datos ingresados coinciden con los almacenados en el array "usuarios"
function submitUsuario() {
    const user = document.getElementById("user1");
    const password = document.getElementById("password");
    const allUsuarios = JSON.parse(sessionStorage.getItem("usuarios"));
    //se busca el usuario en el array "usuarios"
    let userFound = allUsuarios.find(e => e.usuario === user.value) || "0";
    let passwordFound = allUsuarios.find(e => e.contraseña === password.value) || "0";
    console.log(userFound, passwordFound)
    //Si se cumple esta condicion, se setean el nombre del usuario en la página y en el sessionStorage
    if (user.value == userFound.usuario && password.value == passwordFound.contraseña) {
        alert("Se ha logueado con exito");
        sessionStorage.setItem("logeado", true);
        sessionStorage.setItem("actualUser", JSON.stringify(userFound))
        const titulo = document.querySelector("h2");
        const nombre = JSON.parse(sessionStorage.getItem("actualUser"))
        titulo.innerHTML = nombre.nombre + " " + nombre.apellido;
        modal2.close();
    }
    if (userFound && passwordFound == "0") {
        alert("Usuario o contraseña incorrectos");
        sessionStorage.setItem("logeado", false);
    }

}

//Funcion que genera los IDs de usuario
function getUsuarioID() {
    let lastUsuarioID = sessionStorage.getItem("lastUsuarioID") || "-1";
    let newUsuarioID = JSON.parse(lastUsuarioID) + 1;
    sessionStorage.setItem("lastUsuarioID", JSON.stringify(newUsuarioID));
    return newUsuarioID;
}
//funcion que genera los IDs de direcciones
function getDireccionID() {
    let lastDireccionID = sessionStorage.getItem("lastDireccionID") || "-1";
    let newDireccionID = JSON.parse(lastDireccionID) + 1;
    sessionStorage.setItem("lastDireccionID", JSON.stringify(newDireccionID));
    return newDireccionID;
}
//Si se clickea en "agregar direccion" se abre el popUp "myAdress"
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
                <input type="text" name="alias" id="alias" placeholder="Alias" class="select" required> <br>

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
                <select name="localidades" id="localidades" class="select" required>
                    <option value="">--Seleccionar--</option>
                </select> <br>

                <label for="direccion">Dirección</label>
                <input type="text" name="direccion" id="direccion" placeholder="Dirección" class="select" required> <br>

                <label for="telefono">Teléfono</label>
                <input type="tel" name="telefono" id="telefono" placeholder="Teléfono" class="select" required><br>

                <section>
                    <label for="piso">Piso</label>
                    <input type="text" name="piso" id="piso" class="selectLittle" maxlength="2" placeholder="Piso">
                
                    <label for="departamento">Departamento</label>
                    <input type="text" name="departamento" id="departamento" placeholder="Dto." class="selectLittle" maxlength="2"><br>
                </section>
                <div>
                    <input type="submit" value="Guardar" class="submit">
                </div>
                <div id="mensaje" class="errorText"></div>
            </div>
        </form>
    </section>`)
    modal.open();
    const provincias = document.querySelector("#provincias");
    const localidades = document.querySelector("#localidades");
    //Aca se setean los select con sus respectivos valores que van cambiando segun lo que se seleccione
    provincias.addEventListener("change", () => {
        localidades.innerHTML = `<option value="">--Seleccionar--</option>`;
        if (provincias.value == 1) {
            buenosAires.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 2) {
            caba.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 3) {
            catamarca.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 4) {
            chaco.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 5) {
            chubut.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 6) {
            cordoba.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 7) {
            corrientes.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 8) {
            entreRios.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 9) {
            formosa.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 10) {
            jujuy.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 11) {
            laPampa.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 12) {
            laRioja.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 13) {
            mendoza.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 14) {
            misiones.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 15) {
            neuquen.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 16) {
            rioNegro.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 17) {
            salta.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 18) {
            sanJuan.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 19) {
            sanLuis.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 20) {
            santaCruz.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 21) {
            santaFe.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 22) {
            santiago.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 23) {
            tierraDelFuego.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }
        else if (provincias.value == 24) {
            tucuman.forEach((item) => {
                let option = document.createElement("option");
                option.value = item;
                let texto = document.createTextNode(item);
                option.appendChild(texto);
                localidades.appendChild(option);
            });
        }

    })
    let form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        validarDireccion();
    })
})

//Al tocar en "agregar tarjeta" se abre el popUp con la vista "paymentMethod"
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
            <input type="text" name="alias" id="alias" maxlength="20" class="select" placeholder="Alias" required><br>
            <label for="numeroTar">Número tarjeta</label>
            <input type="text" name="numeroTar" id="numeroTar" maxlength="10" class="select"
                placeholder="Número de tarjeta" required><br>
            <section>
                <label for="codigoCvv">Código</label>
                <input type="text" name="codigoCvv" id="codigoCvv" class="selectLittle" maxlength="3" placeholder="Cod."
                    required>
                <label for="vencimiento">Vencimiento</label>
                <input type="text" name="vencimiento" id="vencimiento" placeholder="Vto." class="selectLittle" maxlength="5"
                    required><br>
            </section>
            <label for="titular">Nombre titular</label>
            <input type="text" name="titular" id="titular" required placeholder="Nombre titular" class="select"><br>
            <div class="button">
                <input type="submit" value="Guardar" class="submit">
            </div>
            <span id="mensajeTarjeta" class="errorText"></span>
    </form>
</section>`);
    modal.open();
    let form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        validarTarjeta();
    })
}
)
//Se valida que el formato de las direcciones sean correctos, osino se notifica al usuario
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
    if (!regexNumero.test(piso) && !piso == "") {
        error = true;
        errorMessaje += "<p>El formato del piso no es correcto</p>";
    }
    if (!regexNumero.test(depto) && !depto == "") {
        error = true;
        errorMessaje += "<p>El formato del departamento no es correcto</p>";
    }
    if (error) {
        document.getElementById("mensaje").innerHTML = errorMessaje;
    }
    else {
        submitDireccion();
        modal.close();
        alert("Direcciòn subida correctamente");
        form.reset();
    }

}
/*Si esta todo OK, se sube la direccion al array "direcciones", luego se crea la fila mostrando
los datos ingresados. Ademas se sube tambien al sessionStorage para que al cambiar de vista, no se 
pierdan los datos */
function submitDireccion() {
    const allDirecciones = JSON.parse(sessionStorage.getItem("direcciones"));
    let adress = {
        direccionID: getDireccionID(),
        alias: document.getElementById("alias").value,
        provincia: document.getElementById("provincias").options[provincias.selectedIndex].text,
        localidad: document.getElementById("localidades").options[localidades.selectedIndex].text,
        direccion: document.getElementById("direccion").value,
        telefono: document.getElementById("telefono").value,
        piso: document.getElementById("piso").value,
        departamento: document.getElementById("departamento").value
    }
    if (allDirecciones != null) {
        crearFilaDirecciones(adress.direccionID, adress.alias, adress.direccion);
        allDirecciones.push(adress);
        sessionStorage.setItem("direcciones", JSON.stringify(allDirecciones));
    }
    else {
        crearFilaDirecciones(adress.direccionID, adress.alias, adress.direccion);
        direcciones.push(adress);
        sessionStorage.setItem("direcciones", JSON.stringify(direcciones));
    }
}

//Funcion que se encarga de imprimir todas las direcciones al cargar la página
function imprimirDirecciones() {
    const allDirecciones = JSON.parse(sessionStorage.getItem("direcciones")) || ""
    if (allDirecciones != null) {
        console.log(allDirecciones)
        allDirecciones.forEach((item) => {
            crearFilaDirecciones(item.direccionID, item.alias, item.direccion);
        })
    }
}
//Funcion que se encarga de crear las filas de las direcciones
function crearFilaDirecciones(idDireccion, alias, direccion) {
    const tabla = document.querySelector(".table2")
    let row1 = document.createElement("tr");
    row1.setAttribute("idFila", idDireccion);
    let column1 = document.createElement("td");
    let column2 = document.createElement("td");
    let column3 = document.createElement("td")
    let texto1 = document.createTextNode(alias);
    let texto2 = document.createTextNode(direccion);
    let botonBorrar = document.createElement("a");
    let trashCan = document.createElement("img");
    trashCan.src = "img/icono-basura.png";
    tabla.appendChild(row1);
    row1.appendChild(column1);
    row1.appendChild(column2);
    row1.appendChild(column3);
    column1.appendChild(texto1);
    column2.appendChild(texto2);
    column3.appendChild(botonBorrar);
    botonBorrar.appendChild(trashCan);
    //Al presionar en el icono de "basura" se elimina la columna seleccionada
    botonBorrar.addEventListener("click", (e) => {
        let filaAEliminar = e.target.parentNode.parentNode.parentNode;
        let direccionID = row1.getAttribute("idFila");
        filaAEliminar.remove();
        eliminarDeSessionStorage(direccionID);
    })
}

function eliminarDeSessionStorage(direccionID) {
    let allDirecciones = JSON.parse(sessionStorage.getItem("direcciones"));
    let indexDireccion = allDirecciones.findIndex(element => element.direccionID === direccionID);
    allDirecciones.splice(indexDireccion, 1);
    sessionStorage.setItem("direcciones", JSON.stringify(allDirecciones));
}

function validarTarjeta() {
    let error = false;
    const numTarjeta = document.querySelector("#numeroTar").value;
    const alias = document.querySelector("#alias").value;
    const codigo = document.querySelector("#codigoCvv").value;
    const vencimiento = document.querySelector("#vencimiento").value;
    const titular = document.querySelector("#titular").value;
    let errorMessage = "";
    let suma = 0;

    //Validacion alias
    if (!regexAlias.test(alias)) {
        error = true;
        errorMessage += "<p>No es un alias valido</p>";
    }
    for (var i = 0; i < numTarjeta.length - 1; i++) {
        suma += parseInt(numTarjeta[i]);
    }

    //Validacion Numero de tarjeta
    if (!regexTarjeta.test(numTarjeta)) {
        error = true;
        errorMessage += "<p>No es un numero de tarjeta valido</p>"
    } else {
        if ((numTarjeta[numTarjeta.length - 1] % 2 != 0) && (suma % 2 != 0)) {
            errorMessage += "<p>No es un numero de tarjeta valido</p>"
        } else {
            if ((numTarjeta[numTarjeta.length - 1] % 2 == 0) && (suma % 2 == 0)) {
                error = true;
                errorMessage += "<p>No es un numero de tarjeta valido</p>"
            }
        }
    }
    //Validacion Codigo CVV
    if (!regexCod.test(codigo)) {
        error = true;
        errorMessage += "<p>No es un codigo CVV valido</p>";
    }
    //Validacion vencimiento
    if (!regexVenc.test(vencimiento)) {
        error = true;
        errorMessage += "<p>No es un vencimiento valido</p>";
    }
    //Validacion nombre del titular
    if (!regexTitular.test(titular)) {
        error = true;
        errorMessage += "<p>No es un nombre valido</p>";
    }
    if (error) {
        document.getElementById("mensajeTarjeta").innerHTML = errorMessage;
    }
    else {
        submitTarjeta();
        alert("Tarjeta registrado con éxito")
        modal.close();
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
    sessionStorage.setItem("NewCard", JSON.stringify(metodoDePago));
}

function validarNuevoUsuario() {
    let error = false
    const nombre = document.querySelector("#name").value;
    const apellido = document.querySelector("#surname").value;
    const contrasenia = document.querySelector("#password3").value;
    const contraseniaRepetida = document.querySelector("#repeatPassword").value;
    const email = document.querySelector("#email").value;
    let errorMessage = "";

    //validacion email
    if (!regexEmail.test(email)) {
        error = true;
        errorMessage += "<p>No es un email valido</p>";
    }
    //validacion nombre
    if (!regexNombre.test(nombre)) {
        error = true;
        errorMessage += "<p>No es un nombre valido</p>";
    }
    //validacion apellido
    if (!regexApellido.test(apellido)) {
        error = true;
        errorMessage += "<p>No es un apellido valido</p>";
    }
    //validacion contrasenia
    if (!regexContra.test(contrasenia)) {
        error = true;
        errorMessage += "<p>No es una contraseña valida</p>";
    }
    if (contrasenia != contraseniaRepetida) {
        console.log(contrasenia)
        console.log(contraseniaRepetida)
        error = true;
        errorMessage += "<p>Las contraseñas no coniciden</p>";
    }
    if (error) {
        document.getElementById("mensajeNewUser").innerHTML = errorMessage;
    }
    else {
        submitNuevoUsuario();
    }
}

function submitNuevoUsuario() {
    let nuevoUsuario = {
        usuarioID: getUsuarioID(),
        usuario: document.getElementById("name").value,
        contraseña: document.getElementById("password3").value,
        email: document.getElementById("email").value,
        nombre: document.getElementById("name").value,
        apellido: document.getElementById("surname").value,
        direcciones: "",
        tarjetas: ""
    }
    console.log(nuevoUsuario)
    const listaDeusuarios = JSON.parse(sessionStorage.getItem("usuarios"));
    if (listaDeusuarios != null) {
        listaDeusuarios.push(nuevoUsuario)
        sessionStorage.setItem("usuarios", JSON.stringify(listaDeusuarios));
    }
    else {
        sessionStorage.setItem("usuarios", JSON.stringify(nuevoUsuario));
    }
    alert("Usuario registrado con éxito")
    modal3.close();
    modal2.open();
}