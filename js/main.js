let burger = document.querySelector(".header__burger-gam")
let nav = document.querySelector(".header__nav")
let xburger = document.querySelector(".header__burger-cross")



burger.addEventListener("click", () => {
    xburger.classList.add("block")
    burger.classList.add("none")
    nav.classList.add("flex")
})

xburger.addEventListener("click", () => {
    xburger.classList.remove("block")
    burger.classList.remove("none")
    nav.classList.remove("flex")
})