function iniciarJuego() {
    let botonComidaPlayer = document.getElementById("boton-comida")
    botonComidaPlayer.addEventListener('click', seleccionarComidaPlayer)
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
}


window.addEventListener('load', iniciarJuego)