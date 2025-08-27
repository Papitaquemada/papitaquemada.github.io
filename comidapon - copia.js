const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonComidaJugador = document.getElementById('boton-comida')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-comida')
const inputpapita = document.getElementById('papita')
const inputNuggets = document.getElementById('Nuggets')
const inputTamal = document.getElementById('Tamal')
const inputChococream = document.getElementById('Chococream')
const spanComidajugador = document.getElementById('comida-jugador')

const spanComidaEnemigo = document.getElementById('comida-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')



let comidas = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Comidapon {
    constructor(nombre, foto, vida) {
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    }
}

let papita = new Comidapon('papita', './comidas/papita.png', 5)

let Nuggets = new Comidapon('Nuggets', './comidas/nuggets.png', 5)

let Tamal = new Comidapon('Tamal', './comidas/tamal.png', 5)

let Chococream = new Comidapon('Chococream', './comidas/choco.png', 5)

Comidas.push(papita, Nuggets, Tamal, Chococream)

console.log(Comidas)

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
    
    sectionSeleccionarMascota.style.display = 'none'
    
    
    sectionSeleccionarAtaque.style.display = 'flex'
   
   

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
   
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    
    sectionMensajes.innerHTML = resultadoFinal
    
    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    
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
