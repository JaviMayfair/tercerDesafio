hola1 = document.querySelector("#hola1")
hola2 = document.querySelector("#hola2")
hola3 = document.querySelector("#hola3")
hola4 = document.querySelector("#hola4")

function pintar(element) {
    element.style.backgroundColor = "black"
}

hola1.addEventListener("click" , function() {
    pintar(hola1)
})

hola2.addEventListener("click" , function() {
    pintar(hola2)
})

hola3.addEventListener("click" , function() {
    pintar(hola3)
})

hola4.addEventListener("click" , function() {
    pintar(hola4)
})