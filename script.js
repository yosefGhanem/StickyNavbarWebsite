const nav = document.querySelector('.nav')
window.addEventListener("scroll", fixNav)


function fixNav() {
    // When reaching certain point
    // add the class of active to nav, 
    // remove it when getting back 
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active')
    }else {
        nav.classList.remove('active')
    }
}