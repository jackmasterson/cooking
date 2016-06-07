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


var model =
	{
		dated: [
			{
				backImg: "url(..//cooking/img/cook-back.png",
				date: "Monday, March 3",
				time: "6:00pm",
				location: "Manasquan Rec Center"
			},
			{
				backImg: "url(..//cooking/img/cook-back-five.jpeg",
				date: "Thursday, July 6",
				time: "3:00pm",
				location: "Sea Girt Elementary School"
			}
		],

		halfHeight: [
			{
				head: "Competitions",
				backImg: "url(..//cooking/img/cook-back.png)"
			}
		],

		moreInfo: [
					{
						head: "About Us",
						backImg: "url(..//cooking/img/cook-back-five.jpeg)",
						textFirst: "We love to cook. "+
						"We love to spread our love of "+
						"cooking to the world.",
						textSecond: "We're based in Sea "+
						"Girt, NJ and do classes throughout Monmouth "+
						"County.",
						id: "philosophy",
						headID: "phil-head"
					},
					{
						head: "Contact",
						backImg: "url(..//cooking/img/cook-back-four.jpg)",
						textFirst: "email: fakeEmail@fakeEmail.com",
						textSecond: "phone: (555) 555-5555",
						id: "contact",
						headID: "contact-head"
					}
		]
	};

var viewModel = {
	init: function() {
		atfView.topHalf();
	//	atfView.bottomHalf();
	//	atfClick.dates();
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

	}

};

var clicked = {

	dates: function() {
	
		//	console.log('hey!');
			$('.learn-head').fadeOut(function(){
				$('.dated').fadeIn();
			});
			

	},

	competition: function() {
		console.log(this);
		var comp = document.getElementsByClassName('comp');
		console.log(comp);
		
	},

	philosophy: function() {
		var headID = '#' + this.headID;
		var ID = '#' + this.id;
		console.log(headID);
		console.log(this);
		var philosophy = document.getElementById('philosophy');
		var contact = document.getElementById('contact');

		$(headID).fadeOut(function(){
			$(ID).fadeIn();
		});


		
	}
};

ko.applyBindings(viewModel.init());
