// ESTE ES EL ARCHIVO DE JAVASCRIPT
/*ESTE ES EL ARCHIVO DE JAVASCRIPT*/

console.log("Hola desde index.js")

// Variables

let nombre = "Pepito"
let edad = 18
const CICLO = "DAW1"

//  Operaciones con variables 

let mensaje = "El señor " + nombre + " tiene " +edad + " años"

console.log(mensaje)

//  Sumamos un año
edad = edad+1
console.log(edad)
mensaje= "Ahora tengo "+ edad + " años y estudio " + CICLO
console.log(mensaje)

//  Arrays 
let arrayEstudisos = ["Informática", "Electricidad" , "PFI"]

console.log("Este es el array estudios: ", arrayEstudisos)

console.log("El segundo elemento de la array es: ", arrayEstudisos[1])

//  Objetos

let alumno = {
    nombre: "Paco",
    apellido: "Sanchez Alcaraz",
    edad: 20,
}
console.log("Este es el objeto alumno: ", alumno)

console.log("El nombre del alumno es:", alumno.nombre)

//  Capturamos en variables los diferentes elementos del dom
/*Para seleccionar cual quier consa del documento html se utiliza : document.querySelector("etiqueta")*/

const divcont1 = document.querySelector("#contenido1");
console.log("Este es el objeto correspondiente al div #contenido 1: ",divcont1)

//  Mostramos por consola el objeto en forma de texto

console.log(divcont1.innerHTML)

//Cambiamos el contenido de un elemento del dom

divcont1.innerHTML = "<h2>Nuevo contenido</h2>"

//  Cambiar el apecto de una etiqueta añadiendo o quitando una clase

divcont1.classList.remove("coloragua")
divcont1.classList.add("colormarron")

//  Capturando valores del input

const miInput = document.querySelector("input")
console.log("El value del input es: ", miInput.value)
miInput.value="OtroValor"

//  Capturar eventos

const botonEnviar = document.querySelector("#enviar")

botonEnviar.addEventListener("click", alertaClick)

//  Declarar funciones

function alertaClick(){
    console.log("Has hecho click en el boton")
    alert("Has hecho click!!!!!!!") //  Abre una ventana de alerta con el texto que quieras poner
}