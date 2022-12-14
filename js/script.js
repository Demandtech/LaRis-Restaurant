'use strict'

const headerContainer = document.querySelector('.header')
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
let navLinks = document.getElementsByClassName("nav-link");

//Fixed on scroll;
const hero = document.querySelector(".hero");
const headerHeight = headerContainer.getBoundingClientRect().height;
console.log(headerHeight);
const fixedheader = function(entries) {
    const [entry] = entries;
    if(!entry.isIntersecting) headerContainer.classList.add('fixed-header')
    else headerContainer.classList.remove("fixed-header");
}

const heroObserver = new IntersectionObserver(fixedheader,{
    root: null,
    threshold: 0,
    rootMargin: `-${headerHeight}px`
})

heroObserver.observe(hero)

//Hambuger
function navBar() {
  
  for(let i = 0; i < navLinks.length; i++){
   navLinks[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active1")
    current[0].className = current[0].className.replace("active1", "")
    this.className += " active1"
    // to close the nav on click, it remove the second active class
    hamburger.classList.remove("active2");
    navbar.classList.remove("active2");
   })
  }
 
}

navBar()


function mobileMenu() {
    hamburger.classList.toggle("active2");
    navbar.classList.toggle("active2");
}

hamburger.addEventListener("click", mobileMenu);

let countDownDate = new Date("Jan 5, 2024 15:00:00");
let secInterval = setInterval(function() {
   let today = new Date().getTime(); 
   let distance = countDownDate - today;
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   

   const day = document.getElementById("days")
   const hour = document.getElementById("hours");
   const mins = document.getElementById("mins")  
   const sec = document.getElementById("secs");

   sec.textContent = seconds;
   day.textContent = days;
   mins.textContent = minutes;
   hour.textContent = hours
   if(distance < 0) {
     clearInterval(secInterval);
   }
}, 1000);

secInterval

//Swiper
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // slidesPerView: 3,
    spaceBetween: 20,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        426: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});



 


