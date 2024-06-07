let puntosUsuario = 0;
let puntosCpu = 0;

let instrucciones = document.querySelector('#instrucciones');
let contenedorPuntosUsuarios = document.querySelector('#puntos-usuarios');
let contenedorPuntosCpu = document.querySelector('#puntos-cpu');
let mensaje = document.querySelector('#mensaje');
let contenedorGanaPunto = document.querySelector('#gana-punto');
let elegirTuArma = document.querySelector('#elegir-tu-arma');
let reiniciar = document.querySelector('#reiniciar');

let contenedorEleccionUsuarios = document.querySelector('#eleccion-usuario');
let contenedorEleccionCpu = document.getElementById('eleccion-cpu');

let botonesArmas = document.querySelectorAll('.arma');
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    let eleccionCpu = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    // Piedra => 0, Papel => 1, Tijeras => 2
    if (eleccionCpu === 0) {
        eleccionCpu = "ROCK✊🏼";
    } else if (eleccionCpu === 1) {
        eleccionCpu = "PAPER🖐🏼";
    } else if (eleccionCpu === 2) {
        eleccionCpu = "SCISSORS✌🏼";
    }

    contenedorEleccionUsuarios.innerText = eleccionUsuario;
    contenedorEleccionCpu.innerText = eleccionCpu;

    // Piedra vence a tijeras, tijeras vence a papel, papel vence a piedra
    if (
        (eleccionUsuario === "ROCK✊🏼" && eleccionCpu === "SCISSORS✌🏼") ||
        (eleccionUsuario === "SCISSORS✌🏼" && eleccionCpu === "PAPER🖐🏼") ||
        (eleccionUsuario === "PAPER🖐🏼" && eleccionCpu === "ROCK✊🏼")
    ) {
        ganaUsuario();
    } else if (
        (eleccionCpu === "ROCK✊🏼" && eleccionUsuario === "SCISSORS✌🏼") ||
        (eleccionCpu === "SCISSORS✌🏼" && eleccionUsuario === "PAPER🖐🏼") ||
        (eleccionCpu === "PAPER🖐🏼" && eleccionUsuario === "ROCK✊🏼")
    ) {
        ganaCpu();
    } else {
        empate();
    }

    if (puntosUsuario === 3 || puntosCpu === 3) {
        if (puntosUsuario === 3) {
            instrucciones.innerText = "🔥🔥¡Ganaste el juego!🔥🔥";
        }

        if (puntosCpu === 3) {
            instrucciones.innerText = "😭¡La computadora te ha ganado!😭";
        }

        elegirTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }

    mensaje.classList.remove("disabled");
}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuarios.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "🔥¡Ganas un punto!🔥";
}

function ganaCpu() {
    puntosCpu++;
    contenedorPuntosCpu.innerText = puntosCpu;
    contenedorGanaPunto.innerText = "😥¡La CPU gana un punto!😥";
}

function empate() {
    contenedorGanaPunto.innerText = "😳¡Empate!😳";
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegirTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosCpu = 0;

    contenedorPuntosUsuarios.innerText = puntosUsuario;
    contenedorPuntosCpu.innerText = puntosCpu;

    instrucciones.innerText = "El primero en llegar a 3 gana.";
}
