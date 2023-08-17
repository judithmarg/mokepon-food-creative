let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonComidaPlayer = document.getElementById("boton-comida")
    botonComidaPlayer.addEventListener('click', seleccionarComidaPlayer)
    let botonDormir = document.getElementById('boton-dormir')
    botonDormir.addEventListener('click', ataqueDormir)
    let botonCaer = document.getElementById('boton-caer')
    botonCaer.addEventListener('click', ataqueCaer)
    let botonExplosion = document.getElementById('boton-explosion')
    botonExplosion.addEventListener('click',ataqueExplosion)
}

function seleccionarComidaPlayer(){
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
}

function crearMensaje(){
    
}
function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min +1) + min)
}

window.addEventListener('load', iniciarJuego)