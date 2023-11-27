btnHamburger = document.querySelector('#btn-hamburger')
hamburgerMenu = document.querySelector('.humburger-menu')

btnHamburger.addEventListener(('click'), () => {
  hamburgerMenu.classList.toggle('show')
})