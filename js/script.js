function contact() {
	$('.contacted').fadeOut(function() {
		$('.contact-hidden').fadeIn();
	});
	
};

function dates() {
	$('.learn-head').slideToggle(function() {
		$('.date-hidden').slideToggle();
	})
};

function about() {
	$('.abouted').hide(function() {
		$('.about').show();
	});
};