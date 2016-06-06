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

var atfView = {
	
	topHalf: function() {
		var landing = "<div class='full-width'></div>";
		var shade = "<div class='shade header'></div>";
		var heading = "<h1 class='head-header'>Cooking by Jack</h1>";
		var subHeading = "<h2 class='head-sub-header'>Meals for Any Occasion</h2>";
		
		$('body').prepend(landing);
		$('.full-width').append(shade);
		$('.header').append(heading);
		$('.header').append(subHeading);

	},

	bottomHalf: function() {
		var leftDiv = "<div class='half-width div-left'></div";
		var shade = "<div class='shade dated'></div>";
		var learnHead = "<h2 class='learn-head'></h2>";
		var classHead = "<a href='#/'>Upcoming Classes</a>";
		var hiddenDates = "<div class='date-hidden'></div>";
		var dateUL = "<ul class='date-ul'>" +
						 "<li>Monday, March 3</li>"+
						 "<li>6:00pm</li>"+
						 "<li>Manasquan Rec Center</li>"+
					 "</ul>";

		$('body').append(leftDiv);
		$('.half-width.div-left').append(shade);
		$('.half-width.div-left').append(hiddenDates);
		$('.date-hidden').append(dateUL);
		$('.dated').append(learnHead);
		$('.learn-head').append(classHead);
	}

};

atfView.topHalf();
atfView.bottomHalf();