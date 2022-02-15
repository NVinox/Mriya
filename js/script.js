document.addEventListener("DOMContentLoaded", function (event) {

    // // Header
    // window.addEventListener("scroll", function () {
    //     let header = document.querySelector('.header');
    //     let scrollUp = document.querySelector('.scroll-up');
    //     header.classList.toggle('sticky', window.scrollY > 0);
    // });

    // Languages
    const langBtn = document.querySelectorAll('.js-languages-btn');

    langBtn.forEach(function(item){
        item.addEventListener('click', function(){
            for(element of langBtn){
                element.classList.remove('active');
            }
            item.classList.add('active');
        });
    });

    // Overlay
    const burgerBtn = document.querySelector('.js-burger-button');
    const overlay = document.querySelector('.js-overlay');
    const body = document.querySelector('.js-body');

    function changeClass (){
        burgerBtn.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    burgerBtn.addEventListener('click', changeClass);

    const medical = document.querySelector('.js-medical');
    const submenuFall = document.querySelector('.js-burger__submenu-fall');
    const hiddenMenu = document.querySelector('.hidden-menu');


    medical.addEventListener('mouseover', function(){
        submenuFall.classList.add('active');
    });

    medical.addEventListener('click', ()=>{
        hiddenMenu.classList.toggle('visible');
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
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });

    // Tabs
    const rellaxBtns = document.querySelectorAll('[data-tab]');

    rellaxBtns.forEach(item => {
        item.addEventListener('click', function(){
            for(element of rellaxBtns){
                element.classList.remove('active');
            }
            this.classList.toggle('active');

            const tabContents = document.querySelectorAll('[data-tab-content]');

            tabContents.forEach(function(item){
                item.classList.add('hidden');
            });

            const tabHeader = document.querySelector('#' + this.dataset.tab);
            tabHeader.classList.remove('hidden');
        });

    });
    
    // Rellax Special Slider
    const specialSlider = new Swiper('.rellax-special__slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3,
        spaceBetween: 40,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            361: {
                slidesPerView: 1.3,
                spaceBetween: 20
            },
            520: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    // Rellax Category Slider
    const categorySlider = new Swiper('.rellax-category__slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3,
        spaceBetween: 40,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    // All slider
    let position = 0;
    const container = document.querySelector('.js-all__container'),
          track = document.querySelector('.js-all__track'),
          items = document.querySelectorAll('.js-all__item'),
          btnPrev = document.querySelector('.js-all__btn-prev'),
          btnNext = document.querySelector('.js-all__btn-next'),
          slidesToShow = 1,
          slidesToScroll = 1,
          itemsCount = items.length;
          itemWidth = container.clientWidth / slidesToShow,
          movePosition = (slidesToScroll * itemWidth);

    items.forEach(item => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    }

    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    }

});