$(document).ready(function(){

	$(".js--section-paragraphe").waypoint(function(direction) { /* qd la class apparait alors...*/
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	});


$(".js-scroll-livres").click(function() {
		$("html, body").animate({scrollTop: $(".js-section-livres").offset().top}, 600);
	});
});
