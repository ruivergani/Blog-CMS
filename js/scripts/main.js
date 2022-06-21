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