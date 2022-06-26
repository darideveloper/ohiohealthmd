const plus_btns = document.querySelectorAll (".about .btn.phantom")
const details_elems = document.querySelectorAll (".about .details")

window.onload = () => hide_details_elems()
window.onresize = () => hide_details_elems()

function hide_details_elems () {
    if (window.matchMedia("(max-width: 800px)").matches) {
        for (const details_elem of details_elems) {
            details_elem.classList.add ("hide")
        }
    }
}

for (const plus_btn of plus_btns) {
    plus_btn.addEventListener("click", function (e) {
        // Get details elem
        let wrapper = this.parentNode.parentNode
        let details = wrapper.querySelector (".details")

        // Show or hide details
        details.classList.toggle ("hide")

        // Check status of the button
        let is_active = ! details.classList.contains ("hide")

        // Change button icon
        let use_elem = this.querySelector ("use")
        if (is_active) {
            use_elem.setAttribute ("xlink:href", "#svg-minus")
        } else {
            use_elem.setAttribute ("xlink:href", "#svg-plus")
        }
    })
}