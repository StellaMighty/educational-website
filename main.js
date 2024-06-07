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