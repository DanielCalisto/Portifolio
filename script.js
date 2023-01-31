let botao1 = document.getElementById("btna")
let botao2 = document.getElementById("btnb")
let botao3 = document.getElementById("btnc")
let botao4 = document.getElementById("btnd")
let parte1 = document.getElementById("parte1")
let parte2 = document.getElementById("parte2")
let parte3 = document.getElementById("parte3")
let parte4 = document.getElementById("parte4")

function divA() {
    parte1.style.display="block"
    parte2.style.display="none"
    parte3.style.display="none"
    parte4.style.display="none"
    botao1.style.backgroundColor="red"
    botao2.style.backgroundColor="white"
    botao3.style.backgroundColor="white"
    botao4.style.backgroundColor="white"
    botao1.style.fontFamily="lobster"
}

function divB() {
    parte1.style.display="none"
    parte2.style.display="block"
    parte3.style.display="none"
    parte4.style.display="none"
    botao1.style.backgroundColor="white"
    botao2.style.backgroundColor="red"
    botao3.style.backgroundColor="white"
    botao4.style.backgroundColor="white"
    botao2.style.fontFamily="lobster"
}

function divC() {
    parte1.style.display="none"
    parte2.style.display="none"
    parte3.style.display="block"
    parte4.style.display="none"
    botao1.style.backgroundColor="white"
    botao2.style.backgroundColor="white"
    botao3.style.backgroundColor="red"
    botao4.style.backgroundColor="white"
    botao3.style.fontFamily="lobster"
}

function divD() {
    parte1.style.display="none"
    parte2.style.display="none"
    parte3.style.display="none"
    parte4.style.display="block"
    botao1.style.backgroundColor="white"
    botao2.style.backgroundColor="white"
    botao3.style.backgroundColor="white"
}

function confirm() {
    window.alert("s")
}