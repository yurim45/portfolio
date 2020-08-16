"use strict";

// Make navbar transparent when it is on the top
// navbar가 상단에 있을 때 투명하게 만들기
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");
    } else {
        navbar.classList.remove("navbar--dark");
    }
});

// handle scrolling when tapping on the navbar menu
// navbar 메뉴를 탭할 때 스크롤 처리
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    } else {
        scrollIntoView(link);
    }
});

// Handle contact me button 💡
// contact Me 버튼을 클릭할 때
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
    const scrollTo = document.querySelector("#contact");
    scrollIntoView("#contact");
});

// 스크롤 이동 함수
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}
