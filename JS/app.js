$(document).ready(function() {
	$('.icon-box').hover(function() {
		$(this).next('a').css('display', 'inline-block');
	}, function() {
		$(this).next('a').css('display', 'none');	
	});
	$('.btn').click(function(event) {
		event.preventDefault();

		$('#sticky-social').toggleClass('opened');

	});
});