let switchBtn = document.querySelector(".switch");
let on = document.querySelector(".on rect")
let off = document.querySelector(".off circle")

function offBtn() {
    off.classList.toggle("onActive")
    on.classList.toggle("onActive2")
}

switchBtn.addEventListener("click", offBtn)

let generator = document.querySelector(".generator");
let flashlight = document.querySelector(".flashlight");
let bluetooth = document.querySelector(".bluetooth");
let orange = document.querySelector(".orange");
let outlet = document.querySelector(".outlet");
let shield = document.querySelector(".shield");
let tracking = document.querySelector(".tracking");
generator.addEventListener("click", function() {
    generator.classList.toggle("darken")
})
flashlight.addEventListener("click", function() {
    flashlight.classList.toggle("darken")
})
bluetooth.addEventListener("click", function() {
    bluetooth.classList.toggle("darken")
})
orange.addEventListener("click", function() {
    orange.classList.toggle("darken")
})
outlet.addEventListener("click", function() {
    outlet.classList.toggle("darken")
})
shield.addEventListener("click", function() {
    shield.classList.toggle("darken")
})
tracking.addEventListener("click", function() {
    tracking.classList.toggle("darken")
})

let menu = document.querySelector(".rond")
let after = document.querySelector(".after")
let barre1 = document.querySelector(".barre1")
let barre2 = document.querySelector(".barre2")
let ferrari = document.querySelector(".logo img")

function menuOpen() {
    after.classList.toggle("openMenu")
    barre1.classList.toggle("cross1")
    barre2.classList.toggle("cross2")
    ferrari.classList.toggle("ferrari")
}
menu.addEventListener("click", menuOpen)