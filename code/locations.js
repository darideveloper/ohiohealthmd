const wrapper_locations = document.querySelector (".wrapper-locations")
const locations_articles = document.querySelectorAll ("article.location")
const show_button = document.querySelector ("button.show-all")

show_button.addEventListener ("click", function (e) {
    this.classList.toggle ("active")
    let classes = Array.from(this.classList)

    if (classes.length == 2) {
        // Show all articles
        wrapper_locations.classList.add ("active")
        for (article of locations_articles) {
            article.classList.remove ("hide")
        }
    } else {
        // Show first row
        wrapper_locations.classList.remove ("active")
    }
})
