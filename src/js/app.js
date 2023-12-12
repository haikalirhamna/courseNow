import '../sass/style.scss';
import AOS from 'aos';

const btnHamburger = document.querySelector('#btn-hamburger')
const hamburgerMenu = document.querySelector('.humburger-menu')

btnHamburger.addEventListener(('click'), () => {
  hamburgerMenu.classList.toggle('show')
})

AOS.init();