const $html = document.querySelector("html")
const chk = document.getElementById("check")
chk.addEventListener("change", () => {
    $html.classList.toggle("dark-mode")
})



const alt = document.getElementById("campo1")
alt.addEventListener("keypress", () => {
let altlength = alt.value.length
if (altlength === 1 ) {
    alt.value += '.'
}
})

const pes = document.getElementById("campo2")
pes.addEventListener("keypress", () => {
let peslength = pes.value.length
if (peslength === 2 ) {
    pes.value += '.'
}
})

function imc() {
var nome = document.getElementById("campo0").value
var altura = document.getElementById("campo1").value
var peso = document.getElementById("campo2").value
var botao = document.getElementById("btn")
var s = peso / (altura*altura).toFixed("5")
var r = s.toFixed(2)


if (r < 18.49){
    var i = "Abaixo do peso normal";
} else if (r > 18.50 && r < 24.99) {
    var i = "Com o peso normal";
} else if (r > 25 && r < 29.99) {
    var i = "Com excesso de peso";
} else if (r > 30 && r < 34.99) {
    var i = "Com obesidade de primeiro grau";
} else if (r > 35 && r < 39.99) {
    var i = "Com obesidade de segundo grau"; 
} else if (r >= 40) {
    var i = "Com obesidade de terceiro grau";
}


window.alert(`Olá ${nome}, O seu IMC é ${r} e vocé está  ${i} `)

}