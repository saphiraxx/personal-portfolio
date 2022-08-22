const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
});


const body = document.querySelector('body')
const headerMenu = document.querySelector('.header-menu')
console.log(body)

body.addEventListener('scroll',()=>{
    headerMenu.classList.add('header-menu-fixed')
});