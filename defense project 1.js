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

function scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
           });
    }

    const sr = ScrollReveal ({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 300,
    })

    sr.reveal('.home__bg', {scale: 1.1, opacity: 1})
    sr.reveal('.home__swiper', {origin:'right', distance: '300px', delay: 800})
    sr.reveal('.home__data', {origin:'bottom', distance: '120px', delay: 1600})
    sr.reveal('.swiper-pagination-bullet', {origin:'top', delay: 1800, opacity: 0})
    sr.reveal('.home__button', {origin:'top', delay: 2200})
    sr.reveal('.about__data .contact__content', {origin:'left'})
    sr.reveal('.about__video .contact__img', {origin:'right'})
    sr.reveal('.models__card', {interval: 100})
    sr.reveal('.info__img', {distance: '120px'})
    sr.reveal('.info__number', {origin: 'bottom', distance: '80px', delay: 800})
    sr.reveal('.info__group', {interval: 100, delay: 1300})
    sr.reveal('.footer__container')


