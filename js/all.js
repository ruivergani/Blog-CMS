"use strict";var header=document.getElementById("header");$(function(){$(window).on("scroll",function(){20<$(window).scrollTop()?$("#header").addClass("bgON"):$("#header").removeClass("bgON")})});var slide_podcast=new Swiper(".slide-podcast",{slidesPerView:4,spaceBetween:32,pagination:{el:".s-podcast .container .top .ctrl-slide .swiper-pagination",clickable:!0}});