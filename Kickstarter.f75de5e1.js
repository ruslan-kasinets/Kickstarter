'use strict';
AOS.init();
// логіка перемикання мови
const langs = document.querySelectorAll('.page__lang');
const iconEN = document.querySelectorAll('.icon-en');
const iconUA = document.querySelectorAll('.icon-ua');
const iconsWrapper = document.querySelectorAll('.lang-icons');
const email = document.querySelector('.questions__email');
const message = document.querySelector('.questions__message');
let currentLang = localStorage.getItem('lang') || 'en';
function setLanguage(lang) {
    if (lang === 'ua') {
        email.placeholder = "\u0412\u0430\u0448 email";
        message.placeholder = "\u0412\u0430\u0448\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F...";
    } else {
        email.placeholder = 'Your email';
        message.placeholder = 'Your message...';
    }
    langs.forEach((el)=>{
        el.classList.remove('active');
        if (el.classList.contains(lang)) el.classList.add('active');
    });
    if (lang === 'en') {
        iconEN.forEach((icon)=>{
            icon.style.display = 'block';
        });
        iconUA.forEach((icon)=>{
            icon.style.display = 'none';
        });
    } else {
        iconEN.forEach((icon)=>{
            icon.style.display = 'none';
        });
        iconUA.forEach((icon)=>{
            icon.style.display = 'block';
        });
    }
    localStorage.setItem('lang', lang);
    currentLang = lang;
}
function toggleLanguage() {
    const nextLang = currentLang === 'en' ? 'ua' : 'en';
    setLanguage(nextLang);
}
iconsWrapper.forEach((el)=>{
    el.addEventListener('click', toggleLanguage);
});
setLanguage(currentLang);
// оновлення лічильника слайдера
function updateMyCounter(s) {
    const el = document.querySelector('.swiper-curent');
    if (el) {
        const current = s.realIndex + 1;
        el.textContent = current.toString().padStart(2, '0');
    }
}
// Налаштування свайпера
const swiper = new Swiper('.swiper', {
    loop: true,
    on: {
        init: function a() {
            updateMyCounter(this);
        },
        slideChange: function b() {
            updateMyCounter(this);
        },
        slideChangeTransitionStart (swiper) {
            const img = swiper.slides[swiper.activeIndex].querySelector('.hero__image');
            if (!img) return;
            img.style.animation = 'none';
            img.offsetHeight;
            img.style.animation = null;
        }
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        }
    },
    autoplay: {
        delay: 3000
    }
});
// скидання форми
const form = document.querySelector('#form');
form.addEventListener('submit', buttonClick, false);
function buttonClick(event) {
    event.preventDefault();
    form.reset();
}
// Міняє тему з світлої на темну і навпаки, зберігаючи зміни в локал сторейдж
const root = document.documentElement;
const THEME_KEY = 'theme';
function applyTheme(theme) {
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(THEME_KEY, theme);
}
document.addEventListener('click', (e)=>{
    const themeIcon = e.target.closest('.header__night');
    if (!themeIcon) return;
    const isDark = root.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
});
// Активація анімації в меню
const menuBtn = document.querySelector('.header__menu-icon');
const closeBtn = document.querySelector('.menu__close');
const logo = document.querySelector('.menu__logo');
const menuItems = document.querySelectorAll('.menu__item');
const menuButtons = document.querySelector('.menu__buttons');
const buyBtn = document.querySelector('.menu__buy-button');
menuBtn.addEventListener('click', ()=>{
    menuItems.forEach((item, index)=>{
        item.classList.add('menu__item--active');
        item.style.animationDelay = `${(index + 1) * 0.1}s`;
    });
    logo.classList.add('menu__logo--active');
    menuButtons.classList.add('menu__buttons--active');
    closeBtn.classList.add('menu__close--active');
    buyBtn.classList.add('menu__buy-button--active');
});
closeBtn.addEventListener('click', ()=>{
    menuItems.forEach((item, index)=>{
        item.classList.remove('menu__item--active');
    });
    logo.classList.remove('menu__logo--active');
    menuButtons.classList.remove('menu__buttons--active');
    closeBtn.classList.remove('menu__close--active');
    buyBtn.classList.remove('menu__buy-button--active');
});

//# sourceMappingURL=Kickstarter.f75de5e1.js.map
