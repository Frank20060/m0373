console.log("Hello world")

// Creamos un array con 5 objetos que contienen datos de usuarios
const usuarios = [
    { id: 1, nombre: "Juan", edad: 25, email: "juan@example.com" },
    { id: 2, nombre: "María", edad: 30, email: "maria@example.com" },
    { id: 3, nombre: "Pedro", edad: 35, email: "pedro@example.com" },
    { id: 4, nombre: "Ana", edad: 28, email: "ana@example.com" },
    { id: 5, nombre: "Luis", edad: 32, email: "luis@example.com" }
];

// Inicializamos una variable para almacenar las tarjetas HTML
let targetas = "";

// Recorremos el array de usuarios para generar las tarjetas HTML
for(let i = 0; i < usuarios.length; i++){
    targetas = targetas + `
    <div class="card" id="${usuarios[i].id}">
        <h2>${usuarios[i].nombre}</h2>
        <p>Email: ${usuarios[i].email}</p>
        <p>ID: ${usuarios[i].id}</p>
        <button id="${usuarios[i].id}">Ver detalle</button>
    </div>
    `;
}

// Imprimimos las tarjetas generadas en la consola
console.log(targetas);

// Insertamos las tarjetas en el elemento con la clase "cards" en el HTML
document.querySelector(".cards").innerHTML = targetas;

// Seleccionamos todas las tarjetas generadas
const arrayCards = document.querySelectorAll(".card");
console.log(arrayCards);

// Añadimos un evento de clic a cada tarjeta
for(let i = 0; i < arrayCards.length; i++){
    console.log(arrayCards[i]);
    arrayCards[i].addEventListener("click", function(e){
        console.log("Has hecho click en la card", arrayCards[i].id);
        console.log(e.target.id);
        // Si el elemento clicado tiene un id, redirigimos a la página de detalle con el id correspondiente
        if(e.target.id){
            window.location.href = `detalle.html?id=${e.target.id}`;
        }
    });
}



