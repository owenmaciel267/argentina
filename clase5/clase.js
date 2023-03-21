   


// Cambiar color

function cambiarColor(){
    let elemet = document.getElementById("section")
    let color = prompt("ingresa un color")
    elemet.style.setProperty("background", color)

}



function creaTabla(){

    let nombre = document.querySelector("#nombre").value
    let apellido = document.querySelector("#apellido").value
    let sexo = document.querySelector("#sexo").value
    let dni = document.querySelector("#dni").value

    let table = document.getElementById("tabla")

    let row = table.insertRow(1)

    let c1 = row.insertCell(0)
    let c2 = row.insertCell(1)
    let c3 = row.insertCell(2)
    let c4 = row.insertCell(3)


    c1.innerText = nombre
    c2.innerText = apellido
    c3.innerText = sexo
    c4.innerText = dni


}


// Queria probar de esta manera pero por alguna razon no funciono

// const enviar = document.getElementById("agregar")
// enviar.addEventListener("click", ()=>{
//     let nombre = document.querySelector("#nombre").value
//     let apellido = document.querySelector("#apellido").value
//     let sexo = document.querySelector("#sexo").value
//     let dni = document.querySelector("#numero").value
//     let table = document.getElementById("tabla")

//     let row = table.insertRow(1)

//     let c1 = row.insertCell(0)
//     let c2 = row.insertCell(1)
//     let c3 = row.insertCell(2)
//     let c4 = row.insertCell(3)


//     c1.innerText = nombre
//     c2.innerText = apellido
//     c3.innerText = sexo
//     c4.innerText = dni
// })