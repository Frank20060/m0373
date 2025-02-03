console.log("Bienvenido index2.js")
const frutas= ["Naranja", "Pera", "Fresa"]
console.log("Mi futa favorita es la ", frutas[0])
for(let i=0; i<3; i++){
    console.log(frutas[i])
}
let botton = document.querySelector("#contenido3>button")
console.log(botton.innerHTML)
botton.addEventListener("click", cambiarcolor)

const divcont1 = document.querySelector("#contenido1");

function cambiarcolor(){
    botton.classList.add("colorgreen")
    divcont1.innerHTML = "<ul><li>Frutas[1]</li></ul>"
}
