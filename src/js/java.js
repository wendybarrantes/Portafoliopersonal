let nombreUsuario = document.getElementById("nombreUsuario")
let claveUsuario = document.getElementById("claveUsuario")
let btnCrearCuenta = document.getElementById("btnCrearCuenta")
let btnAcceso = document.getElementById("btnAcceso")
let usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || []

let inputLogin = document.getElementById("inputLogin")
let inputPassword = document.getElementById("inputPass")

function guardarDatos() {
    let usuario = {
        nombre: nombreUsuario.value,
        clave: claveUsuario.value
    }
    usuariosGuardados.push(usuario)

    localStorage.setItem("usuarios",JSON.stringify(usuariosGuardados))
}

function validarDatos() {
    let usuarioExiste = usuariosGuardados.find(usuario => usuario.nombre === inputLogin.value && usuario.clave === inputPassword.value)
    if (usuarioExiste) {
        alert("ENTRA")
    }else{
        alert("DATOS INCORRECTOS")
    }
}
btnAcceso.addEventListener("click",function(){
    validarDatos()
})


// btnCrearCuenta.addEventListener("click",()=>{
//     guardarDatos()
// })