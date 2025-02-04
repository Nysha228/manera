const header = document.querySelector(".header"),
    experience = document.querySelector(".experience"),
    headerHeight = header.offsetHeight,
    experienceHeight = experience.offsetHeight;
console.log(headerHeight), window.addEventListener("scroll", (() => {
    let e = window.scrollY;
    e > 90 ? header.classList.add("header--scrolling") : header.classList.remove("header--scrolling"), document.querySelectorAll(".section").forEach(((t, n) => {
        t.offsetTop - document.querySelector(".header").clientHeight <= e && (document.querySelectorAll(".menu__link").forEach((e => {
            e.classList.contains("menu-active") && e.classList.remove("menu-active")
        })), document.querySelectorAll(".menu__item")[n].querySelector(".menu__link").classList.add("menu-active"))
    }))
}));
const menuBtn = document.querySelector(".butger-btn"),
    menuWrap = document.querySelector(".menu"),
    menuLink = document.querySelectorAll(".menu__link"),
    headerSite = document.querySelector(".header"),
    body = document.querySelector(".body"),
    toggleMenu = () => {
        menuWrap.classList.toggle("menu-active"), menuBtn.classList.toggle("menu-active"), headerSite.classList.toggle("menu-active"), menuWrap.classList.contains("menu-active") ? (menuBtn.setAttribute("aria-laberl", "close menu"), menuBtn.setAttribute("aria-expanded", "true")) : (menuBtn.setAttribute("aria-laberl", "open menu"), menuBtn.setAttribute("aria-expanded", "false"))
    };
menuBtn.addEventListener("click", (() => {
    toggleMenu(body.classList.toggle("menu-active"))
})), menuLink.forEach((e => {
    e.addEventListener("click", (() => {
        toggleMenu(body.classList.remove("menu-active"))
    }))
}));
for (let e = 0; e < menuLink.length; e++) menuLink[e].addEventListener("click", (function() {
    for (let e = 0; e < menuLink.length; e++) menuLink[e].classList.remove("menu-active");
    this.classList.add("menu-active")
}));
document.addEventListener("DOMContentLoaded", (() => {
    if (window.innerWidth > 1380) {
        new Swiper(".swiper", {
            autoplay: {
                delay: 0,
                disableOnInteraction: !1
            },
            slidesPerView: 4,
            spaceBetween: 0,
            speed: 4e3,
            loop: !1,
            allowTouchMove: !1
        })
    }
}));
const tabBtn = document.querySelectorAll(".tab__btn"),
    tabWrapper = document.querySelectorAll(".tab__wrapper");

function open(e) {
    const t = e.currentTarget,
        n = t.dataset.button;
    tabBtn.forEach((function(e) {
        e.classList.remove("tab__btn--active")
    })), t.classList.add("tab__btn--active"), tabWrapper.forEach((function(e) {
        e.classList.remove("tab__wrapper--active")
    })), document.querySelector(`#${n}`).classList.add("tab__wrapper--active")
}
tabBtn.forEach((function(e) {
    e.addEventListener("click", open)
}));