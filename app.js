// Slider
const menuBtn = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu')
});

let flag = 0;

function controller(x) {
    flag = flag + x;
    slideshow(flag);
}

slideshow(flag);

function slideshow(num) {
    let slides = document.getElementsByClassName('slide');

    if (num == slides.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }
    for (let y of slides) {
        y.style.display = "none";
    }
    slides[num].style.display = "block";
}

// Navbar
let nav = document.querySelector("#nav")

window.addEventListener('scroll', function () {
    if (window.scrollY >= 200) {
        nav.style.backgroundColor = "#212528";
    } else {
        nav.style.backgroundColor = "transparent";
    }
});

// Scroll Up Button
let scrollbtn = document.getElementById("scroll");

window.addEventListener('scroll', function () {
    if (window.scrollY >= 400) {
        scrollbtn.style.display = "block";
    } else {
        scrollbtn.style.display = "none";
    }
});

function scrollUp() {
    window.scrollBy(0, -2610);
}

// Scroll Down Button
function scrollDown() {
    window.scrollBy(0, 2610);
}

// loading
let loadercontainer = document.getElementsByClassName("loadercontainer");
setInterval(function loader() {
    loadercontainer[0].style.display = "none";
}, 3000);