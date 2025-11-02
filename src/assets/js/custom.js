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
});
