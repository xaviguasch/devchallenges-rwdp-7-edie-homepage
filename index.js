const closeButton = document.querySelector('.close-nav')
const openButton = document.querySelector('.open-nav')
const nav = document.querySelector('.header__nav')

closeButton.addEventListener('click', () => {
  nav.classList.remove('navigation-open')
})

openButton.addEventListener('click', () => {
  nav.classList.add('navigation-open')
})
