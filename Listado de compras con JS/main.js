// Referencias de paginas
let pantallaBienvenida = document.getElementById("pantallaBienvenida")
let pantallaFormulario = document.getElementById("pantallaFormulario")
let pantallaLista = document.getElementById("pantallaLista")
let pantallaDescripcion = document.getElementById("pantallaDescripcion")
let agregarProducto = document.getElementById("agregarProducto")
let agregarProductoLista = document.getElementById("agregarProductoLista")
let formularioTitulo = document.getElementById("formularioTitulo")
let formularioCategoria = document.getElementById("formularioCategoria")
let formularioDescripcion = document.getElementById("formularioDescripcion")
let formularioAgregar = document.getElementById("formularioAgregar")
let lista = document.getElementById("lista")
let descripcionIcono = document.getElementById("descripcionIcono")
let descripcionTitulo = document.getElementById("descripcionTitulo")
let descripcionDescripcion = document.getElementById("descripcionDescripcion")
let cerrarDescripcion = document.getElementById("cerrarDescripcion")

let agregarMas = () =>{
    pantallaBienvenida.style.display = "none"
    pantallaLista.style.display = "none"
    pantallaFormulario.style.display = "block"
}
agregarProducto.addEventListener('click', agregarMas)
agregarProductoLista.addEventListener('click', agregarMas)



let mostrarLista = () =>{
    pantallaFormulario.style.display = "none"
    pantallaLista.style.display = "block"
}

let mostrarDescripcion = (titulo, categoria, descripcion) =>{
    descripcionIcono.setAttribute("src", `icons/${categoria}`)
    descripcionTitulo.innerHTML = titulo
    descripcionDescripcion.innerHTML = descripcion
    pantallaLista.style.display = "none"
    pantallaDescripcion.style.display = "block"
}

cerrarDescripcion.addEventListener('click', () =>{
    pantallaDescripcion.style.display = "none"
    pantallaLista.style.display = "block"
})

formularioAgregar.addEventListener("click", () =>{
    let titulo = formularioTitulo.value
    let categoria = formularioCategoria.value
    let descripcion = formularioDescripcion.value
    let modelo = `<li class="list-group-item">
    <img src="icons/${categoria}" alt="${titulo}" />
    <p>${titulo}</p>
    <button onclick="mostrarDescripcion('${titulo}', '${categoria}', '${descripcion}')" ><img src="./icons/flecha.png" alt="" />
    </button></li>`
    if(categoria != "Categoria" && titulo != "" && descripcion != "") {
        lista.innerHTML += modelo
        formularioCategoria.value = ""
        formularioTitulo.value = ""
        formularioDescripcion.value = ""
        mostrarLista()  
    } else {
        alert("Completa el/los campos que faltan.")
    }
}) 