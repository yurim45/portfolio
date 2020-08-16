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

// Make home slowly fade to transparent as the window scrolls down
// 스크롤이 되면 홈 부분 투명 처리
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "Arrow-up" Button when scrolling down
// 스크롤 다운 시 Arrow-up 버튼 보여주기
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add("visible");
    } else {
        arrowUp.classList.remove("visible");
    }
});

// Handle click on the "Arrow-up" button
arrowUp.addEventListener("click", () => {
    scrollIntoView("#home");
});

// projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
    const filter =
        e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    projectContainer.classList.add("anim-out");
    setTimeout(() => {
        projects.forEach((project) => {
            if (filter === "*" || filter === project.dataset.type) {
                project.classList.remove("invisible");
            } else {
                project.classList.add("invisible");
            }
        });
        projectContainer.classList.remove("anim-out");
    }, 300);
});

// 스크롤 이동 함수
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}
