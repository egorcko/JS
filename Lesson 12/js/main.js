$(document).ready(function() {
	$('.modal').css({
		marginTop: '-50em',
		display: 'block'
	});
	
	$('#choose-tour, .contact, [href="#sheldure"').click(function() {
		$('.overlay').fadeIn();
		$('.modal').animate({marginTop: '5em'}, 900);
	});

	$('.close').click(function() {
		$('.modal').animate({marginTop: '-50em'}, 900);
		$('.overlay').fadeOut('slow');
	});

});