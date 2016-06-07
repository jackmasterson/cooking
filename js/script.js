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


var expView = {

	//var landing = "<div class='full-width'></div>";
	var shade = "<div class='shade'></div>";
	var header = "<h1 class='head'></h1>";
}
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

		function leftSide() {
			var leftDiv = "<div class='half-width div-left'></div";
			var shade = "<div class='shade dated'>"+
							"<ul class='date-ul'>" +
								 "<li>Monday, March 3</li>"+
								 "<li>6:00pm</li>"+
								 "<li>Manasquan Rec Center</li>"+
							"</ul>"+
							"<ul class='date-ul'>" +
								 "<li>Tuesday, July </li>"+
								 "<li>5:00pm</li>"+
								 "<li>Sea Girt Elementary School</li>"+
							"</ul>"+
						"</div>";
			var learnHead = "<h2 class='learn-head'></h2>";
			var classHead = "<a class='class-href' href='#/'>Upcoming Classes</a>";
			var hiddenDates = "<div class='date-hidden'></div>";

			$('body').append(leftDiv);
			$('.half-width.div-left').append(shade);
			$('.dated').append(hiddenDates);
			$('.dated').append(learnHead);
			$('.learn-head').append(classHead);
		};
		leftSide();

		function rightSide() {

		}
	}

};

var atfClick = {

	dates: function() {
		$('.class-href').click(function(){
		//	console.log('hey!');
			$('.learn-head').fadeOut(function(){
				$('.date-ul').fadeIn();
			});
			
		});
	}
};


atfView.topHalf();
atfView.bottomHalf();
atfClick.dates();