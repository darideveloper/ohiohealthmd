const photo = document.querySelector("img.photo")

window.onload = () => hide_photo()
window.onresize = () => hide_photo()

function hide_photo () {
    if (window.matchMedia("(max-width: 600px)").matches) {
        photo.classList.add ("hide")
    } else {
        photo.classList.remove ("hide")

    }
}