// Header background
const header = document.getElementById('header');

$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 20) {
          $("#header").addClass("bgON");
      } else {
         $("#header").removeClass("bgON");
      }
  });
});

// Swiper Pagination Slide
var slide_podcast = new Swiper(".slide-podcast", {
  slidesPerView: 4,
  spaceBetween: 32,
  pagination: {
    el: ".s-podcast .container .top .ctrl-slide .swiper-pagination",
    clickable: true,
  },
  // navigation section 
  navigation: {
    nextEl: ".s-podcast .top .btn-next",
    prevEl: ".s-podcast .top .btn-prev",
  },
  // smooth pagination
  speed: 600,
  // responsive part of the slide
  breakpoints: {
    // mobile
    275: {
      slidesPerView: 1.1, // part of the other slide
      spaceBetween: 20,
    },
    // tablet
    560: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 2.1
    },
    991: {
      slidesPerView: 2.5
    },
    // normal view
    1150: {
      slidesPerView: 4,
      spaceBetween: 32
    }
  }
});

// Button Scroll Top
const btnScrollTop = document.getElementById("js-btn-scroll-top");
btnScrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})

// Add class active to menu button
const menuButton = document.getElementById('js-menu-button');
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('is-active'); // add the CSS configuration on this button
})