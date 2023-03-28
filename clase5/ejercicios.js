 /*
    1. Crea un array que contenga el nombre de cinco colores escritos como strings.
    
    2. Guarda en una variable el tercer elemento del array del ejercicio anterior.

    3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del
    ejercicio 1.

    4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la
    función Math.random().

    5. Rellena un array con los números del 1 al 10. Muéstralo por la consola.

    6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.

    7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la
    consola.

    8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
    Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
    medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
    luego recorriendolo para mostrar el resultado deseado del ejercicio.

    9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
    convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
    Mostrar el resultado elemento de html.

    10. Generar la inversa del ejercicio anterior (de pesos a dólares).

    11. Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para
    ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados
    son 86 grados fahrenheit.

    12.Hacer un formulario para solicitar el envío de una caja de cartón. En el formulario
    podremos especificar las características de la caja. Ejemplo:


    13. A través de un formulario, el usuario debe introducir un número secreto que estará
    entre 0 y 5.
    El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el
    juego.
    Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde.
    
    14. Dado un input y un botón, escribir nombres de personas e ir mostrando en una lista
    desordenada a medida que se agregan.
*/

// 1
// let colors = []

// for(let i  =  0; i<5; i++){
//     // const nombreColores = [prompt("ingresa colores")]
//     // colors.push(nombreColores)
// }
// console.log(colors);


// 2
// let element3 = colors[2]

// 3
// let position0String = colors[0]
// let convierte = position0String[0].split("")
// console.log(convierte);

// 4
// let random = Math.floor(Math.random() * 99)
// console.log(random);

// 5
// let array = []
// for(let i = 1 ; i<=10; i++ ){
//     array.push(i)
// }
// console.log(array);


// 6
// let array = []
// for (let i = 0; i < 10; i++) {
//     // let random = Math.floor(Math.random() * 10)
//     // array.push(random)
//     array.push(Math.floor(Math.random() * 10))
// }AAAAA

// console.log(array);


//7
// let otro = array.slice()
// otro.push(267)
// console.log(otro);

// 8
// let cadenas = [];

// while (true) {
//   let entrada = prompt("Ingrese una cadena de texto (o 'cancelar' para salir): ");
  
//   if (entrada === "cancelar") {
//     break;
//   }
  
//   cadenas.push(entrada);
// }

// let concatenadas = "";

// for (let i = 0; i < cadenas.length; i++) {
//   concatenadas += cadenas[i] + "-";
// }

// concatenadas = concatenadas.slice(0, -1);
// console.log("Las cadenas ingresadas fueron: " + concatenadas);



//9
// function convertir() {
//     let dolares = parseFloat(document.getElementById("dolares").value);
//     let pesos = dolares * 300;
//     document.getElementById("pesos").value = pesos;
// }

// 10
// function convertir() {
//     let pesos = parseFloat(document.getElementById("dolares").value);
//     let dolares = pesos / 300;
//     document.getElementById("pesos").value = dolares;
// }

// 11
// function convertir() {
//     let centigrados = parseFloat(document.getElementById("centigrados").value);
//     let fahrenheit = (centigrados * 9/5) + 32;
//     document.getElementById("fahrenheit").value = fahrenheit;
// }

// 12
function enviarFormulario() {

    let ancho = document.getElementById("ancho").value;
    let alto = document.getElementById("alto").value;
    let largo = document.getElementById("largo").value;
    let peso = document.getElementById("peso").value;
    let direccion = document.getElementById("direccion").value;

    

    if (ancho == "" || alto == "" || largo == "" || isNaN(ancho) || isNaN(alto) || isNaN(peso)|| peso == "" || direccion == "" ) {
           
            alert("Por favor, complete todos los campos del formulario, o complete correctamente estos");
            return false;
       
    }
    if (largo != "chica" && largo != "mediana" && largo != "grande") {
        alert("El valor ingresado en el campo 'largo' no es válido. Debe ser 'chica', 'mediana' o 'grande'.");
        return false;
    }

            alert(`¡El formulario ha sido enviado con éxito! \n 
               -La caja se enviara a ${direccion} \n
               -Su ancho es de: ${ancho}cm \n 
               -Son una altura de: ${ancho}cm \n 
               -Con un largo de: ${largo} \n 
               -Y un peso de ${peso}kg` 
           )   
   
           return true;
           
}
    
    


   


// 13
// let numeroSecreto = Math.floor(Math.random() * 6); 
// let intentos = 3; 

// function comprobarNumero() {
//     let numeroUsuario = document.getElementById("numeroUsuario").value;
//     let resultado = document.getElementById("resultado"); 

//     if (numeroUsuario == numeroSecreto) {
//         resultado.innerHTML = "¡Has ganado! El número secreto era " + numeroSecreto;
//     } else {
//         intentos--;
//         if (intentos > 0) {
//             resultado.innerHTML = "Fallaste. Te quedan " + intentos + " intentos.";
//         } else {
//             resultado.innerHTML = "¡Lo siento, has perdido! El número secreto era " + numeroSecreto;
//             document.getElementById("botonAdivinar").disabled = true; 
//         }
//     }
// }


// 14
function agregarNombre() {
    let nombre = document.getElementById("nombre").value; 
    let listaNombres = document.getElementById("listaNombres"); 

    let nuevoElemento = document.createElement("li"); 
    nuevoElemento.textContent = nombre; 

    listaNombres.appendChild(nuevoElemento); 
    document.getElementById("nombre").value = ""; 
}