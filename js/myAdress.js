const form = document.querySelector("form");
const provincias = document.querySelector("#provincias");
const localidades = document.querySelector("#localidades");
let buenosAires = ["Avellaneda", "Bahía Blanca", "Campana", "Chascomús", "Florencio Varela", "Lanús", "La Matanza", "Morón"]
let caba = ["Comuna 1", "Comuna 2", "Comuna 3", "Comuna 4", "Comuna 5"];
let catamarca = ["Aconquija","Ancasti","Andagalá"];
let chaco = ["Avia Terai","Campo Largo","Charata"];
let chubut = ["Biedma","Gaiman","Rawson"];
let cordoba = ["Arroyito","Cosquín","Mina Clavero"];
let corrientes = ["Bella Vista","Chavarría","Colonia Libertad"];
let entreRios = ["Colón","Paraná","Concordia"];
let formosa = ["El Colorado","Herradura","Las Lomitas"];
let jujuy = ["Abra Pampa","El Aguilar","Humahuaca"];
let laPampa = ["Abramo","General Pico","Santa Rosa"];
let laRioja = ["Alpasinche","Los Robles","Villa Casana"];
let mendoza = ["Agua Escondida","Cacheuta","Junín"];
let misiones = ["Caá Yarí","Garuhapé","Pindapoy"];
let neuquen = ["Aluminé","Junín de los Andes","Loncopué"];
let rioNegro = ["Bariloche","El bolsón","los Menucos"];
let salta = ["Chicoana","El Tipal","Las Lajitas"];
let sanJuan = ["Albardón","San Martín","Santa Lucía"];
let sanLuis = ["El Cadillo","Los Cerrillos","Saladillo"];
let santaCruz = ["Las Heras","Perito Moreno","Río Gallegos"];
let santafe = ["Acebal","Berabevú","Cayastá"];
let santiago = ["Añatuya","Bandera","Villa La Punta"];
let tierraDelFuego = ["Antártida Argentina","Río Grande","Ushuaia"];
let tucuman = ["Aguilares","Bella Vista","Concepción"];

let regexNumero = /^[0-9]+$/;

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

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validar();
});

function validar() {
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
        submit();
        document.getElementById("mensaje").innerHTML = "";
    }

}

function submit() {
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