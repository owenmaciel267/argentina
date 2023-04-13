
// 1. Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista
// desordenada. Tiene que crear la lista uno mismo.

let arr = []
for (let i = 0; i <= 5; i++) {
    arr.push(Math.floor(Math.random() * 5))
    // arr.push(random)
}
console.log(`Este es el ejercicio 1 = ${arr}`);



// 2. Dado el array = [1,2,3,4,5,6]
// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos
// en pantalla.
let array = [1,2,3,4,5,6]
let i = 0
while(i < array.length){
    console.log(`Ejercicio 2a= `+array[i]);
    i++
}
// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
// pantalla.
for (let i = 0; i < array.length; i++) {
    console.log(`Ejercicio 2b= ${array[i]}`);
    
}
// c. Iterar por todos los elementos dentro de un array utilizando .forEach y
// mostrarlos en pantalla.
array.forEach(element => {
    console.log(`2c=` +element);
});
// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
array.forEach(element => {
    console.log(`2d= ${element + 1}`);
});
// e. Generar una copia de un array pero con todos los elementos incrementados en 1.
let nuevo = array.map(function(element){
    return element + 1
})
console.log(`2e= ${nuevo}`);
// f. Calcular el promedio
let  acum = 0
let prom = 0
for (let i = 0; i < array.length; i++) {

    acum = acum + array[i]
    prom = acum / array.length
    console.log(`2f=`+prom);
}
// 3. Dado un array de números, mostrar cómo quedaría si cada uno de los números es
// elevado al cuadrado.
let elevado = array.map(function(element){
    return element ** 2
})
console.log(`3= `+elevado);
// 4. Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.
let arrayNCuatro = [ 1, -4, 12, 0, -3, 29, -150]
let sumandoPositivos = 0
for (let i = 0; i < array.length; i++) {
    if(arrayNCuatro[i]>0){
         sumandoPositivos = sumandoPositivos + arrayNCuatro[i]
    }    
}
console.log(`4= `+ sumandoPositivos);
// 5. Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].
let arrayEjCinco = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"]

// a. Obtener aquellos nombres con al menos 6 letras.
let EjCinco = arrayEjCinco.filter( v => v.length >= 6)
console.log(`5a= `+ EjCinco);
// b. Obtener los nombres que comienzan con "M".
let nombreM = arrayEjCinco.filter(function(nombre){
    return nombre.charAt(0) === "M"
})
console.log(`5b= `+nombreM);
// c. Ordenar alfabéticamente y mostrar por consola.
let ordenado = [...arrayEjCinco]
ordenado.sort()
console.log(`5c= `+ordenado);
// d. Generar un array que contenga solo las iniciales
let iniciales = []
for (let i = 0; i < array.length; i++) {

    if(arrayEjCinco[i]){
        iniciales.push(arrayEjCinco[i].charAt(0))
    }
    
}
console.log(`5d= `+iniciales);
// e. Ejemplo: ["F", "L", "E", "M",... ].
// f. Generar un array que contenga todos los nombres en mayúscula.
let todoMayus = arrayEjCinco.map(function(elem){
    return elem.toUpperCase()
})
console.log(`5f= `+ todoMayus);
// g. Queremos saber si alguno de estos nombres comienza con "J”
let algunoConJ = arrayEjCinco.some(j => j.charAt(0) === "J")
console.log(`5g= `+ algunoConJ);
// 6. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar
// si un color introducido por el usuario a través de un prompt se encuentra dentro del
// array o no.
/*  let colors = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
    let colUsuario = prompt("Introduce un color para ver si esta dispoble")
    let esta = false 
    for (let i = 0; i < colors.length; i++) {

        if(colors[i] === colUsuario){
            esta = true
            break   
        }

    }
    if(esta){
        console.log(`6= el color ${colUsuario} si se encuentra en el array`);
    }else{
        console.log(`6= el color ${colUsuario} no se encuentra en el array`);
    }
*/

// 7. Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
// solo los números pares
let numbers = [2,4,3,5,6]
function pares (numbers){
    let numerosP = []
    for (let i = 0; i < numbers.length; i++) {

        if(numbers[i] % 2 === 0){
            numerosP.push(numbers[i])
        }

    }
    return numerosP
}
console.log(pares(numbers));
// 8. Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
// contenga sólo las palabras que empiezan con una vocal.
// const palabras = []
// const vocales =[]
// for (let i = 0; i < 5; i++) {
//     const ingresandoPalabras = prompt("ingresa palabras si esta contiene vocal se agregara a otro array")

//     if(ingresandoPalabras.includes("a") ||ingresandoPalabras.includes("a") ||ingresandoPalabras.includes("a") ||ingresandoPalabras.includes("a") || ingresandoPalabras.includes("a")){
//         vocales.push(ingresandoPalabras)
//     }else{
//         palabras.push(ingresandoPalabras)
//     }
// }
// console.log(palabras);
// console.log(vocales);



// 9. Crear un método que permite intercambiar las posiciones de dos elementos de un
// arreglo en base a sus índices
function intercambiarElementos(arreglo, indice1, indice2) {
    if (indice1 < 0 || indice1 >= arreglo.length || indice2 < 0 || indice2 >= arreglo.length) {
      throw new Error("Los índices están fuera del rango del arreglo")
    }
  
    const temp = arreglo[indice1]
    arreglo[indice1] = arreglo[indice2]
    arreglo[indice2] = temp
}
const arreglo = [1, 2, 3, 4, 5];
console.log(arreglo);

intercambiarElementos(arreglo, 1, 3);
console.log(arreglo);


// 10. Crear dos párrafos en el body de una página. Capturar el evento click solo del primero
// utilizando la librería jQuery.
$(document).ready(function() {
    $('#primer-parrafo').click(function() {
      alert('Haz hecho clic en el primer párrafo!')
    })
})

// 11. Confeccionar una página que muestre una tabla con dos filas y cambiar el color de fondo
// cuando sea presionada con el mouse.
    // Obtener todas las celdas de la tabla
   // Obtener todas las celdas de la tabla
   var celdas = document.getElementsByTagName("td");

   for (let i = 0; i < celdas.length; i++) {
     celdas[i].addEventListener("click", function() {
        this.classList.toggle("resaltado")
     })
   }

// 12. Mostrar una lista no ordenada con 4 elementos 'li'. Ocultar el que se presiona. Para
// ocultar un elemento jQuery tiene un método llamado hide().
$(document).ready(function() {
    $('li').click(function() {
      $(this).hide();
    });
  });
// 13. Confeccionar una página que muestre dos tablas con tres filas cada una. Cambiar el color
// de fondo de cada fila de la primera tabla cuando sea presionada con el mouse.

// 14. Disponer un título de noticia y seguidamente la descripción de la noticia (encerrarlo en
// un div con un nombre de clase), repetir esto para tres noticias. Agregar tres botones que
// rescaten el nombre de la clase para la descripción de la noticia y cambien su tamaño de
// fuente.

// 15. Crear una página que contenga dos tablas de 3 filas y 3 columnas cada una con un texto
// en cada casillero. Luego al presionar un botón cambiar por la cadena "-" solo el
// contenido de la primera tabla, dejando intacto el de la segunda.

// 16. Definir un hipervínculo con la propiedad href con cadena vacía. Luego disponer tres
// botones que permitan fijar distintos hipervínculos para la propiedad href. Además
// actualizar el texto del hipervínculo.

// 17. Confeccionar una página que contenga algunas palabras con el elemento 'strong', luego
// cuando sean presionadas ocultarlas.

// 18. Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla
// cuando ingresamos con el mouse y dejarla con dicho color cuando retiramos la flecha.

// 19. Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla
// cuando ingresamos con el mouse y regresar al original cuando salimos.

// 20. Disponer un div de 800 x 70 píxeles. Al hacer doble clic redimensionarlo a 250 x 250
// píxeles y si se hace doble clic nuevamente retornar al tamaño 800 x 70.

// 21. Confeccionar una página que contenga un div con un conjunto de párrafos. Cuando se
// presione con el mouse dentro del div ocultarlo lentamente y cuando esté
// completamente oculto hacer que aparezca lentamente otro bloque de texto.

// 22. Mostrar con console.log el valor de un option cada vez que un usuario seleccione un
// option nuevo de un elemento select.

// 23. Hacer que un link no salga de la página al hacer click, pero mostrar el valor de la página
// referida con console.log

// 24. Hacer que un formulario no se envíe al hacer click en "enviar", en lugar de eso mostrar
// un texto en la página que el formulario fue enviado.
