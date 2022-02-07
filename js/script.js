document.addEventListener("DOMContentLoaded", function (event) {

    // Header
    window.addEventListener("scroll", function () {
        let header = document.querySelector('.header');
        let scrollUp = document.querySelector('.scroll-up');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Burger BTN
    const burgerBtn = document.querySelector('.burger-button');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('.body');

    function changeClass (){
        burgerBtn.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('hidden');
    }

    burgerBtn.addEventListener('click', changeClass);

    const medical = document.querySelector('.burger__submenu-item--medical');
    const submenuFall = document.querySelector('.burger__submenu-fall');


    medical.addEventListener('mouseover', function(){
        submenuFall.classList.add('active');
    });

    medical.addEventListener('mouseout', () => setTimeout(function(){
        submenuFall.classList.remove('active');
    }, 300));

    // Rellax Slider
    const slider = new Swiper('.burger__slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 20,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 3000,
          },
    });


    // Rellax Slider
    const swiper = new Swiper('.rellax__slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3,
        spaceBetween: 40,
    });

});