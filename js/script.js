$(document).ready(function() {
	$('.header-top__burger').click(function(event) {
		$('.header-top__burger').toggleClass('burger_active');
    $('body').toggleClass('lock');
    $('.header-nav').toggleClass('nav_active');
    $('.header-nav__list-item').toggleClass('item_active');
		$('.header-nav__list').toggleClass('list_active');
    
    
	});
});