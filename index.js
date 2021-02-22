const closeButton = document.querySelector('.close-nav')
const openButton = document.querySelector('.open-nav')
const nav = document.querySelector('.header__nav')
const link = document.querySelectorAll('.nav-link')

closeButton.addEventListener('click', () => {
  nav.classList.remove('navigation-open')
})

openButton.addEventListener('click', () => {
  nav.classList.add('navigation-open')
})

link.forEach((event) => {
  event.addEventListener('click', () => {
    nav.classList.remove('navigation-open')
  })
})
