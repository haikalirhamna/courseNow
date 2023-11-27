import '../sass/style.scss';

const btnHamburger = document.querySelector('#btn-hamburger')
const hamburgerMenu = document.querySelector('.humburger-menu')

btnHamburger.addEventListener(('click'), () => {
  hamburgerMenu.classList.toggle('show')
})