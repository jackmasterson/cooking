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


var model = [
	{
		backImg: "url(..//img/cook-back.png",
		date: "Monday, March 3",
		time: "6:00pm",
		location: "Manasquan Rec Center"
	},
	{
		backImg: "url(..//img/cook-back-five.jpeg",
		date: "Thursday, July 6",
		time: "3:00pm",
		location: "Sea Girt Elementary School"
	}
];

var viewModel = {
	init: function() {
		atfView.topHalf();
		atfView.bottomHalf();
		atfClick.dates();
	}
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

		/*function leftSide() {
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
		leftSide();*/

		function rightSide() {

		}
	}

};

var atfClick = {

	dates: function() {
		$('.class-href').click(function(){
		//	console.log('hey!');
			$('.learn-head').fadeOut(function(){
				$('.dated').fadeIn();
			});
			
		});
	}
};

ko.applyBindings(viewModel.init());
