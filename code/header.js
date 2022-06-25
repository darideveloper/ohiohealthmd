const menu_btn = document.querySelector (".btn.menu")
const header = document.querySelector ("header")

menu_btn.addEventListener ("click", function (e) {
    header.classList.toggle ("active")
})