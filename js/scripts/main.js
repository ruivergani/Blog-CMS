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
  speed: 600
});

// Button Scroll Top
const btnScrollTop = document.getElementById("js-btn-scroll-top");
btnScrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})