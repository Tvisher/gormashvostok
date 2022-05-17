'use strict';
import * as baseFunction from './modules/functions.js';
import './vendors/vendors.js';
import Swiper, {
    Navigation,
    Pagination,
    Autoplay,
    EffectFade,
} from 'swiper';

import AOS from 'aos';
import IMask from 'imask';

// Проверка поддержки webP
baseFunction.testWebP();


// Слайдер полноэкранный
const fullscreenSlider = new Swiper('.main-slider', {
    modules: [Pagination, EffectFade, Autoplay],
    speed: 1200,
    slidesPerView: 1,
    effect: 'fade',
    grabCursor: true,
    loop: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 6000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    on: {
        resize(swiper) {
            swiper.update();
        },
    },
    breakpoints: {
        768: {
            autoHeight: false,
        }
    }
});

const productionSlider = new Swiper('.our-production__slider', {
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1200,
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
});

const newsSlider = new Swiper('.news__slider', {
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1200,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        992: {
            spaceBetween: 50,
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        }
    }
});


const clientsSlider = new Swiper('.clients__slider', {
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1200,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        992: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        },
    }
});


window.addEventListener('load', (e) => {
    document.body.style.opacity = 1;
});
// Инит и опции библиотеки анимаций
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'load', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 25, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

//логика работы меню бургер
document.body.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('[data-burger-menu]')) {
        target.closest('[data-burger-menu]').classList.toggle('active');
        document.querySelector('[data-header-menu]').classList.toggle('active');
        document.body.classList.toggle('hidden');
    }
});


$("[data-open-drop]").click(function () {
    $(this).parent().toggleClass('opened');
    $(this).next().slideToggle("slow", function () {
    });
});



