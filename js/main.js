$(function() {
	'use strict';
	// adjust slider height
	var winH = $(window).height(),
		upperH = $('.upper-bar').innerHeight(),
		navH = $('.navbar').innerHeight();
	$('.slider,.carousel-item').height(winH - (upperH + navH));
	$('.navcolor ul li').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
	});
	// featured worked shuffles
	$('.featured-work ul li').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		if ($(this).data('class') === 'all') {
			$('.shuffles-imgs .col-md').css('opacity', 1);
		} else {
			$('.shuffles-imgs .col-md').css('opacity', '.09');
			$($(this).data('class')).parent().css('opacity', 1);
		}
	});
});
