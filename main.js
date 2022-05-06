// HAMBURGER MENU HANDLING
const menuBtn = document.querySelector('.menu-btn');
const menuHdr = document.querySelector('.menu-header');
const hero = document.querySelector('.hero');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuHdr.classList.add('open');
        menuOpen = true;
    } else {
    menuBtn.classList.remove('open');
    menuHdr.classList.remove('open');
    menuOpen = false;
    }
});


// PARALLAX SCROLLING FOR HERO SECTION

const parallax = document.getElementById("hero-scroll");
const ingredientsParallax = document.getElementById("ingredients-scroll");

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * .5 + "px";

     

    // const target = document.querySelector('.hero-scroll');
    
    // var scrolled = window.pageYOffset;
    // var rate = scrolled * .5;

    // target.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
});







