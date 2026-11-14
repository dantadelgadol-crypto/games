let errores = 0;

const palabras = [

    "FUTBOL",
    "TENIS",
    "BALONCESTO",
    "NATACION",
    "CICLISMO",
    "VOLEIBOL",

    "MEXICO",
    "NORUEGA",
    "JAPON",
    "BRASIL",
    "EGIPTO",
    "ISLANDIA",

    "PILOTO",
    "PANADERO",
    "MEDICO",
    "FONTANERO",
    "BOMBERO",
    "ASTRONAUTA",

    "TRUENO",
    "VENTISCA",
    "LLOVIZNA",
    "TORNADO",
    "NIEBLA",
    "GRANIZO",

    "GUITARRA",
    "VIOLIN",
    "TAMBOR",
    "TROMPETA",
    "PIANO",
    "XILOFONO",

    "BALLENA",
    "TIBURON",
    "CORAL",
    "MEDUSA",
    "LANGOSTA",
    "PULPO",

    "PLANETA",
    "COMETA",
    "GALAXIA",
    "COHETE",
    "ASTEROIDE",
    "ORBITA",

    "CALABAZA",
    "REGALO",
    "DISFRAZ",
    "DESFILE",

    "PAN COMIDO",
    "FELIZ CUMPLEAÑOS",
    "MAS VALE TARDE QUE NUNCA",
    "ERASE UNA VEZ",
    "ESTAR EN LAS NUBES",
    "HORA DE DORMIR",
    "TIRAR LA TOALLA",
    "HELADO DE CHOCOLATE",
    "IRSE POR LAS RAMAS",
    "VACACIONES DE VERANO",
    "A MAL TIEMPO BUENA CARA",
    "BOCADILLO DE JAMON",
    "COSTAR UN OJO DE LA CARA",
    "RESPIRA HONDO",
    "EN BOCA CERRADA NO ENTRAN MOSCAS",
    "NOCHE DE JUEGOS",

    "DIMENSION",
    "CORRECCION",
    "PASION",
    "PRESION",
    "PRECISION",
    "PRIVACION",
    "COMPOSICION",
    "TRADICION",
    "TENSION",
    "ORACION",
    "MISION",
    "ILUSION",
    "DIVISION",
    "DECISION",
    "COMPRENSION",
    "INTENCION",
    "TELEVISION",
    "OCASION",
    "UNCION",
    "TRAICION",

    "DESENLACE",
    "DESCENSO",
    "ESCENARIO",
    "ESCENA",
    "EXENTO",
    "EXEQUIAS",
    "EXECRABLE",
    "EXCESO",
    "EXCESIVO",
    "EXIMIO",
    "ASCENSOR",
    "ISOSCELES",
    "ESENCIA",
    "EXCENTRICO",
    "FASCINAR",
    "FASCINACION"

];

let palabraSecreta =
    palabras[Math.floor(Math.random() * palabras.length)];

const teclado =
document.getElementById("teclado");

const letras =
"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

let progreso = [];

for (let i = 0; i < palabraSecreta.length; i++) {

    if (palabraSecreta[i] === " ") {

        progreso.push("    ");

    } else {

        progreso.push("_");
    }
}

document.getElementById("palabra")
.innerText = progreso.join("");

for (let letra of letras) {

    const boton =
    document.createElement("button");

    boton.innerText = letra;

    boton.onclick = function () {

        boton.disabled = true;

        let encontrada = false;

        for (let i = 0; i < palabraSecreta.length; i++) {

            if (palabraSecreta[i] === letra) {

                progreso[i] = letra;

                encontrada = true;
            }
        }

        document.getElementById("palabra")
        .innerText = progreso.join("");

        if (!encontrada) {

            errores++;

            document.getElementById("ahorcado")
            .src = `imagenes/${errores}.png`;

            if (errores >= 12) {

                document.getElementById("mensaje")
                .innerText =
                `💀 Has perdido. La palabra era: ${palabraSecreta}`;

                progreso =
                palabraSecreta.split("");

                document.getElementById("palabra")
                .innerText =
                progreso.join("");

                desactivarTeclado();

                document.getElementById("reintentar")
                .style.display = "inline-block";
            }
        }

    if (!progreso.includes("_") && errores < 12) { 
            document.getElementById("mensaje")
            .innerText =
            "🎉 ¡Lo has conseguido!";

            desactivarTeclado();

            document.getElementById("siguiente")
            .style.display = "inline-block";
        }
    };

    teclado.appendChild(boton);
}

document.getElementById("siguiente")
.onclick = function () {

    location.reload();
};

document.getElementById("reintentar")
.onclick = function () {

    location.reload();
};

function desactivarTeclado() {

    const botones =
    document.querySelectorAll("#teclado button");

    botones.forEach(boton => {

        boton.disabled = true;
    });
}

document.addEventListener("keydown", function(event) {

    let tecla = event.key.toUpperCase();

    let botones =
    document.querySelectorAll("#teclado button");

    botones.forEach(boton => {

        if(
            boton.innerText === tecla &&
            !boton.disabled
        ){
            boton.click();
        }

    });

});
