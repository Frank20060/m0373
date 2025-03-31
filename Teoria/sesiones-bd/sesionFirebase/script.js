console.log("Hola mundo desde script.js"); 

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJGzlvtaukjNP4XP9U4T0Ls8OOmCcTL-E",
  authDomain: "sesionfirebase-3be32.firebaseapp.com",
  projectId: "sesionfirebase-3be32",
  storageBucket: "sesionfirebase-3be32.firebasestorage.app",
  messagingSenderId: "243752192707",
  appId: "1:243752192707:web:3e4f3af8001a6be4957076"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

console.log("Firebase Firestore inicializado correctamente");

async function leerDatos() {
    // Obtén la referencia a la colección "usuarios"
    const miColeccion = collection(db, "usuarios");

    // Obtén los documentos de la colección
    const usuarios = await getDocs(miColeccion);
    console.log("misusuarios", usuarios);

    // Itera sobre los documentos y muestra los datos
    usuarios.forEach((doc) => {
        console.log("Usuario:", doc.data().nombre);
    });
}

leerDatos();





