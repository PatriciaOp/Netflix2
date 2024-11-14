

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

// Ligar o SOM
botaoSom.addEventListener("click", ligaSom)

function ligaSom(){
    video.muted =  !video.muted //false ou true   muted = false 
}
// ! = inverso / inverte tudo  
// Se ta mudo, ele vai tocar, se tiver tocando ele vai deixar mudo


// Mostrar o MODAL

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
}

// Tocar o TUNDUM

window.addEventListener('load',tocarAudio)

function tocarAudio(){
    audio.play()
}

