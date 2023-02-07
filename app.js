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

let nav = document.querySelector("#nav")

console.log(nav)




window.addEventListener('scroll', function (){
    if (window.scrollY >= 200) {
        nav.style.backgroundColor = "black";
    } else {
        nav.style.backgroundColor = "transparent";
    }
})