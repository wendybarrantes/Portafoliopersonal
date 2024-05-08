let claveUsuario = document.getElementById("claveUsuario")
let btnCrearCuenta = document.getElementById("btnCrearCuenta")
let btnLimpiar = document.getElementById("btnLimpiar")
let nombreUsuario = document.getElementById("nombreUsuario")


function guardarDatos() {
    localStorage.setItem("nombreUsuario",nombreUsuario.value)
    localStorage.setItem("claveUsuario",claveUsuario.value)
}

btnCrearCuenta.addEventListener("click",function(){
    guardarDatos()
})
// btnCrearCuenta.addEventListener("click",()=>{
//     guardarDatos()
// })   

