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

const divcont1 = document.("#contenido1");
console.log("Este es el objeto correspondiente al div #contenidquerySelectoro 1: ",divcont1)

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

/// Creamos una matriz de objetos y accedemos a sus propiedades

const almunosDAW = [
    {
        nombre: "Paco",
        apellido: "Sanchez Alcaraz",
        edad: 20,
        notas: [7, 8, 9]
    },
    {
        nombre: "Pepa",
        apellido: "Sanchez Alcaraz",
        edad: 22,
        notas: [6, 2, 3]
    },
    {
        nombre: "Andrés",
        apellido: "Sanchez Heredia",
        edad: 20,
        notas: [4, 5, 10]
    },
    {
        nombre: "Sofia",
        apellido: "Sanchez Heredia",
        edad: 20,
        notas: [4, 5, 10]
    }
]

//Acceder a los elementos de un array de objetos

console.log("Segundo alumn@ " + almunosDAW[1].notas[0])

///Cuando queramos poner un texto donde queramos respear los saltos de lineas en vez de usar las comillas normales utilizamos lis acentos ``

///Usamos un bucle para generar los tr
///${} es para poner el contenido de una variable en el texto
let filasBody = "";
for(let i = 0; i<3; i++){
    console.log(i)
    filasBody = filasBody + 
    `<tr>
        <td>${i}</td>  
        <td>${almunosDAW[i].nombre}</td>
        <td>${almunosDAW[i].apellido}</td>
    </tr>`
}

const miTabla = document.querySelector("tbody")
miTabla.innerHTML= filasBody
