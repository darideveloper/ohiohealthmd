const locations_articles = document.querySelectorAll ("article.location")

window.onload = () => show_articles()
window.onresize = () => show_articles()

function show_articles () {
    // Get number of visible articles
    let visible_articles_num = 4
    if (window.matchMedia("(max-width: 1100px)").matches) {
        visible_articles_num = 3
    } 
    if (window.matchMedia("(max-width: 750px)").matches) {
        visible_articles_num = 2
    } 
    if (window.matchMedia("(max-width: 470px)").matches) {
        visible_articles_num = 1
    }

    // Hide all articles
    for (article of locations_articles) {
        article.classList.add ("hide")
    }
    
    // Show visible articles
    for (const [index, article] of locations_articles.entries()) {
        if (index < visible_articles_num) {
            article.classList.remove ("hide")
        } else {
            break
        }
    }
}

