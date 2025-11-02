$(document).ready(function () {
	"use strict";
	$('#mobSearchBtn').click(function () {
		$('.mobSearch').toggleClass("showSearch");
		$('.mobLogo').toggleClass("mobLogoShowHide");
	});
	$('.welcomeSlider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.welcomeSlider',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});
	$('.trainerBtmCarousel').slick({
		centerMode: true,
		centerPadding: '100px',
		slidesToShow: 3,
		arrows: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}]
	});
	$('.testimonailCarousel').slick({
		dots: true
	});

	var swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		centeredSlides: true,
		spaceBetween: 100,
		slidesPerView: 'auto',
	  loop:true,
		coverflowEffect: {
		  rotate: 0,
		  stretch: 5,
		  depth: 75,
		  modifier: 2,
		  slideShadows: true
		},
	  navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  });
});
