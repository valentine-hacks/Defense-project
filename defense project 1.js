const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose)
    navClose.addEventListener('click', () =>{
navMenu.classList.remove('show-menu')
})

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(' .nav_link')
const LinkAction = () =>{
const navMenu = document.getElementById( 'nav-nenu')
navMenu.classList.remove('show-menu')
}
navLink. forEach(n => n.addEventListener('click', LinkAction))

const swiperHome = new Swiper('.home__swiper', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
    },
  },

  autoplay: {
    delay: 3000,
  }
})

const bgHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)