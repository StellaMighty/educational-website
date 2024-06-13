// change navebar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 5)
});

// toggle the FQAs to hide /show

const myFaq = document.querySelectorAll('.faq');

myFaq.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');

        const eyecon = item.querySelector('.faq__icon i');
        if (eyecon.className === 'uil uil-plus') {
            eyecon.className = 'uil uil-music';
            
        }
        else{
            eyecon.className = 'uil uil-plus';
        }
    })
})

const open_nav_button = document.querySelector('#open-menu-btn');
const close_nav_button = document.querySelector('#close-menu-btn');

const nav_menu = document.querySelector('.nav__menu');

open_nav_button.addEventListener('click', () => {
    nav_menu.style.display = "flex";
    close_nav_button.style.display = "inline-block";
    open_nav_button.style.display = "none";
    
})
 const closeNavBar = () => {
    nav_menu.style.display = "none";
    close_nav_button.style.display = "none";
    open_nav_button.style.display = "inline-block";
 }
 
close_nav_button.addEventListener('click', closeNavBar);