/*

Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

🚨 Si no coincide con ningún id, renderizar un mensaje de error.

*/




const Pizzas = [
    {
        id: 1,
        nombre: "Jamon y Queso",
        ingredientes: ["Salsa", " Jamon", " Queso", " Morron"],
        precio: 600
    },

    {
        id: 2,
        nombre: "Rucula y Crudo",
        ingredientes: ["Salsa", " Rucula", " Queso", " Tomate", " Jamon Crudo"],
        precio: 780
    },

    {
        id: 3,
        nombre: "Muzza",
        ingredientes: ["Salsa", " muzzarella"],
        precio: 580
    },

    {
        id: 4,
        nombre: "Bomba",
        ingredientes: ["Salsa", " Cheddar", " Fritas", " Huevo Frito"],
        precio: 1000
    },

    {
        id: 5,
        nombre: "Anana",
        ingredientes: [" Salsa", " Jamon", " Queso", " Anana caramelizada"],
        precio: 620
    },

    {
        id: 6,
        nombre: "Cebolla",
        ingredientes: ["Salsa", " Queso", " cebolla caramelizada"],
        precio: 780
    }
]

const inputCodigo = document.getElementById("codigoNumerico");
const botonValidar = document.getElementById("validar");
const nombrePizza = document.getElementById("nombrePizza");
const valorPizza = document.getElementById('valorPizza');
const lista = document.getElementById("lista");
const liCreate = document.createElement("li");
numero = inputCodigo.value;







function validarCodigoNumerico(e) {
    e.preventDefault()
    console.log(e)
    if (Pizzas.some(elemento => elemento.id == numero)) {
        Pizzas.forEach((elemento => {
            if (elemento.id == numero) {
                nombrePizza.textContent = elemento.nombre
                valorPizza.textContent = "$" + elemento.precio
                lista.appendChild(liCreate)
                liCreate.textContent = elemento.ingredientes

            }



        }))
    }
    else {
        nombrePizza.textContent = "##_ERROR_##"
        valorPizza.textContent = "..."
        liCreate.textContent = ""


        alert("Ese Numero no Existe o no fue registrado aun")

    }



}



function ponerValor() {
    numero = inputCodigo.value;
    console.log(numero)
}


const item = document.createElement("div");

inputCodigo.addEventListener("keyup", ponerValor)
botonValidar.addEventListener("click", validarCodigoNumerico)