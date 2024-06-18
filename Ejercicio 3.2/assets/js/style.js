key = document.querySelector("#key")

color = ""
function crearDiv() {
    principal = document.querySelector("#principal")
    principal.innerHTML = principal.innerHTML + "<div style= 'width: 200px; height: 200px; background-color:" + color + "; border: 1px solid black;'>Hola Mundo</div>"
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "pink"
        key.style.backgroundColor = color
    } else if (event.key === 's') {
        color = "orange"
        key.style.backgroundColor = color
    } else if (event.key === 'd') {
        color = "skyblue"
        key.style.backgroundColor = color
    } else  if (event.key === 'q') {
        color = "purple"
        crearDiv()
    } else if (event.key === 'w') {
        color = "grey"
        crearDiv()
    } else if (event.key === 'e') {
        color = "brown"
        crearDiv()
    }
    
})

