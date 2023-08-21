let ataqueJugador
let ataqueEnemigo
let vidasJugador  = 3
let vidasOponente = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-attack')
    sectionSeleccionarAtaque.style.display='none'

    let sectionSeleccionarReiniciar = document.getElementById('reiniciar')
    sectionSeleccionarReiniciar.style.display='none'

    let botonComidaPlayer = document.getElementById("boton-comida")
    botonComidaPlayer.addEventListener('click', seleccionarComidaPlayer)

    let botonDormir = document.getElementById('boton-dormir')
    botonDormir.addEventListener('click', ataqueDormir)
    let botonCaer = document.getElementById('boton-caer')
    botonCaer.addEventListener('click', ataqueCaer)
    let botonExplosion = document.getElementById('boton-explosion')
    botonExplosion.addEventListener('click',ataqueExplosion)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarComidaPlayer(){
    let sectionSeleccionarComida = document.getElementById('seleccionar-food')
    sectionSeleccionarComida.style.display='none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-attack')
    sectionSeleccionarAtaque.style.display='block'

    let inputPizza = document.getElementById('pizzate')
    let inputHambur = document.getElementById('hamburgui')
    let inputFrench = document.getElementById('frenchpapas')
    let spanComidaPlayer = document.getElementById('comida-player')
    if(inputPizza.checked){
        spanComidaPlayer.innerHTML = 'Pizzate'
    }else if(inputHambur.checked){
        spanComidaPlayer.innerHTML = 'Hamburgui'
    }else if(inputFrench.checked){
        spanComidaPlayer.innerHTML = 'FrenchPapas'
    }else{
        alert('Selecciona una comida por favor')
    }
    seleccionarComidaEnemigo()
}

function seleccionarComidaEnemigo(){
    let numAleatorio = aleatorio(1,3)
    let spanComidaOponente = document.getElementById('comida-oponente')
    if (numAleatorio == 1){
        spanComidaOponente.innerHTML = 'Pizzate'
    }else if(numAleatorio == 2){
        spanComidaOponente.innerHTML = 'Hamburgui'
    }else{
        spanComidaOponente.innerHTML = 'FrenchPapas'
    }
}

function ataqueCaer(){
    ataqueJugador = 'CAER, Lo empujó'
    ataqueAleatorioEnemigo()
}

function ataqueDormir(){
    ataqueJugador = 'DORMIR, Le hizo dormir'
    ataqueAleatorioEnemigo()
}

function ataqueExplosion(){
    ataqueJugador = 'EXPLOSION, Hizo una explosion'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let numAleatorio = aleatorio(1,3)
    if (numAleatorio == 1){
        ataqueEnemigo = 'CAER, Te empujó'
    }else if(numAleatorio == 2){
        ataqueEnemigo = 'DORMIR, Te hizo dormir'
    }else{
        ataqueEnemigo = 'EXPLOSION, Hizo una explosion'
    }

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasOponente = document.getElementById('vidas-oponente')
    if(ataqueJugador == 'DORMIR, Le hizo dormir' && ataqueEnemigo == 'DORMIR, Te hizo dormir'){
        crearMensaje('EMPATE')
        spanVidasOponente.innerHTML = vidasOponente
        spanVidasJugador.innerHTML = vidasJugador
    }else if(ataqueJugador == 'CAER, Lo empujó' && ataqueEnemigo == 'CAER, Te empujó'){
        crearMensaje('EMPATE')
        spanVidasOponente.innerHTML = vidasOponente
        spanVidasJugador.innerHTML = vidasJugador
    }else if(ataqueJugador == 'EXPLOSION, Hizo una explosion' && ataqueEnemigo == 'EXPLOSION, Hizo una explosion'){
        crearMensaje('EMPATE')
        spanVidasOponente.innerHTML = vidasOponente
        spanVidasJugador.innerHTML = vidasJugador
    }else if(ataqueJugador == 'DORMIR, Le hizo dormir' && ataqueEnemigo == 'CAER, Te empujó'){
        crearMensaje('GANASTE')
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    }else if(ataqueJugador == 'EXPLOSION, Hizo una explosion' && ataqueEnemigo == 'DORMIR, Te hizo dormir'){
        crearMensaje('GANASTE')
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    }else if(ataqueJugador == 'CAER, Lo empujó' && ataqueEnemigo == 'EXPLOSION, Hizo una explosion'){
        crearMensaje('GANASTE')
        vidasOponente--
        spanVidasOponente.innerHTML = vidasOponente
    }else {
        crearMensaje('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas(){
    if(vidasOponente == 0){
        crearMensajeFinal('FELICIDADES GANASTE!!!')
    }else if(vidasJugador == 0){
        crearMensajeFinal('PERDISTE, SUERTE PARA LA PROXIMA!')
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu comida atacó con '+ataqueJugador+', la comida del enemigo ataco con '+ataqueEnemigo+'-'+resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('h3')
    parrafo.innerHTML = resultado

    sectionMensajes.appendChild(parrafo)

    let botonDormir = document.getElementById('boton-dormir')
    botonDormir.disabled = true
    let botonCaer = document.getElementById('boton-caer')
    botonCaer.disabled = true
    let botonExplosion = document.getElementById('boton-explosion')
    botonExplosion.disabled = true

    let sectionSeleccionarReiniciar = document.getElementById('reiniciar')
    sectionSeleccionarReiniciar.style.display='block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min +1) + min)
}

window.addEventListener('load', iniciarJuego)