const inputs_email = document.querySelector ("#email")
inputs_email.addEventListener ("focusout", function (e) {
    if (this.value.length > 0) {
        this.classList.add ("validate")
    } else {
        this.classList.remove ("validate")
    }
})