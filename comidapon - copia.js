let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
let sectionReiniciar = document.getElementById('reiniciar')
let botonComidaJugador = document.getElementById('boton-comida')
let botonFuego = document.getElementById('boton-fuego')
let botonAgua = document.getElementById('boton-agua')
let botonTierra = document.getElementById('boton-tierra')
let botonReiniciar = document.getElementById('boton-reiniciar')

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarjuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'

    
    sectionReiniciar.style.display = 'none'
    
    
    
    botonComidaJugador.addEventListener('click', seleccionarComidaJugador)

    
    botonFuego.addEventListener('click', ataqueFuego)
    
    botonAgua.addEventListener('click', ataqueAgua)
    
    botonTierra.addEventListener('click', ataqueTierra)

    
    botonReiniciar.addEventListener('click', reiniciarJuego)

    mostrarVidasConEmojis(3, 3)
    
}

function seleccionarComidaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-comida')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
   
    let inputpapita = document.getElementById('papita')
    let inputNuggets = document.getElementById('Nuggets')
    let inputTamal = document.getElementById('Tamal')
    let inputChococream = document.getElementById('Chococream')
    let spanComidajugador = document.getElementById('comida-jugador')

    if (inputpapita.checked) {
        spanComidajugador.innerHTML = 'papita'
    } else if (inputNuggets.checked) {
        spanComidajugador.innerHTML = 'Nuggets'
    } else if (inputTamal.checked) {
        spanComidajugador.innerHTML = 'Tamal'
    }else if (inputChococream.checked) {
        spanComidajugador.innerHTML = 'Chococream'
    } else {
        alert('no no no no🤦‍♂️,primero selecciona una comida oke tamos bien🧐👍' )
        
    }

    seleccionarComidaEnemigo()
}

function seleccionarComidaEnemigo() {
    let comidaAleatoria = aleatorio(1,4)
    let spanComidaEnemigo = document.getElementById('comida-enemigo')

    if (comidaAleatoria == 1) {
        spanComidaEnemigo.innerHTML = 'papita'
    } else if (comidaAleatoria == 2) {
        spanComidaEnemigo.innerHTML = 'Nuggets'
    } else {
        spanComidaEnemigo.innerHTML = 'Tamal'
    } if (comidaAleatoria == 4) {
        spanComidaEnemigo.innerHTML = 'Chococream'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE🤝")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE🥇🏆")
        let vidasEnemigoAntes = vidasEnemigo
        vidasEnemigo--
        mostrarVidasConEmojis(vidasJugador, vidasEnemigoAntes)
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE🥇🏆")
        let vidasEnemigoAntes = vidasEnemigo
        vidasEnemigo--
        mostrarVidasConEmojis(vidasJugador, vidasEnemigoAntes)
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE🥇🏆")
        let vidasJugadorAntes = vidasJugador
        vidasJugador--
        mostrarVidasConEmojis(vidasJugadorAntes, vidasEnemigo)
    } else {
        crearMensaje("PERDISTE❌")
        let vidasJugadorAntes = vidasJugador
        vidasJugador--
        mostrarVidasConEmojis(vidasJugadorAntes, vidasEnemigo)
    }

    revisionDeVidas()
}

function revisionDeVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES GANASTE🎉🎇🎈🥳 YIPIIIIIIII")
    }else if (vidasJugador == 0) {
        crearMensajeFinal("QUE MAL PERDISTE❌😔😭 PIPIPIPI")
    }
        
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
   function mostrarVidasConEmojis(vidasJugadorAntes, vidasEnemigoAntes) {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    mostrarVidasConAnimacion(vidasJugadorAntes, vidasJugador, spanVidasJugador)
    mostrarVidasConAnimacion(vidasEnemigoAntes, vidasEnemigo, spanVidasEnemigo)
}

function generarCorazones(vidasRestantes) {
    const totalVidas = 3
    let corazones = ''

    for (let i = 0; i < totalVidas; i++) {
        if (i < vidasRestantes) {
            corazones += '❤️'
        } else {
            corazones += '💔'
        }
    }

    return corazones
}

function mostrarExplosionAntesDeRomper(vidasAntes, vidasDespues) {
    const totalVidas = 3
    let corazones = ''

    for (let i = 0; i < totalVidas; i++) {
        if (i < vidasDespues) {
            corazones += '❤️'
        } else if (i === vidasDespues && vidasDespues < vidasAntes) {
            corazones += '💥' // explosión solo en el que perdió
        } else {
            corazones += '💔'
        }
    }

    return corazones
}

function mostrarVidasConAnimacion(vidasAntes, vidasDespues, spanElemento) {
    // Mostrar explosión primero
    spanElemento.innerHTML = mostrarExplosionAntesDeRomper(vidasAntes, vidasDespues)

    // Después de 0.5s, mostrar los corazones actualizados
    setTimeout(() => {
        spanElemento.innerHTML = generarCorazones(vidasDespues)
    }, 500)
}

function reproducirExplosion() {
    const explosion = new Audio('./comidas/explosion.mp3')
    explosion.volume = 0.1 // ajustá el volumen si querés
    explosion.play()
}

function mostrarVidasConAnimacion(vidasAntes, vidasDespues, spanElemento) {
    spanElemento.innerHTML = mostrarExplosionAntesDeRomper(vidasAntes, vidasDespues)

    // 🔊 ¡BOOM!
    reproducirExplosion()

    setTimeout(() => {
        spanElemento.innerHTML = generarCorazones(vidasDespues)
    }, 500)
}

    window.addEventListener('load', iniciarjuego)
