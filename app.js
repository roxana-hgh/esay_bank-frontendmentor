document.addEventListener('DOMContentLoaded', () => {

const hamberger = document.getElementById('hamberger')
const navUl = document.getElementById('nav-ul')

hamberger.addEventListener('click', () => {
    navUl.classList.toggle('show')
})

})