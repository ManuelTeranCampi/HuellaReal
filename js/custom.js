

/* navigation menu animation with way points */

$('.nav-animate').waypoint(function(direction) {
	$('.secondary-menu').toggleClass('hide', direction === "down");
	$('.navbar').toggleClass('comeup', direction === "down");
}, {
	offset: '10%'
});

// Block scrolling
	
$('.nav li a').bind('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1200);
		if($(window).width() < 768){
			var $navMain = $(".navbar-collapse");
			$navMain.collapse('hide');
		}
		e.preventDefault();
});

/* play list music button */
$(document).ready(function(){
	
	var obj = document.createElement("audio");
	obj.src = "audio/father.mp3";
	obj.volume = 1;
	obj.autoPlay = true;
	obj.preLoad = true;       
	
	$('#playNowBtn').click(function(e){
		var $playNowButton = $(this);																/* button variable */
		var $playlist = $playNowButton.parent().parent();						/* play list section class */
		var $disk			= $playlist.children().children('.disk');			/* disk image */
		
		if ($disk.hasClass('rotating')) {
			$disk.removeClass('rotating');
			$playNowButton.children('i').removeClass('fa-pause').addClass('fa-play');
			obj.pause();
		} else {
			$disk.addClass('rotating');
			$playNowButton.children('i').removeClass('fa-play').addClass('fa-pause');
			obj.play();
		}
		e.preventDefault();
	});
	
});

function PlayMusic1(){
	document.getElementById("music1").play();
}

function PauseMusic1(){
	document.getElementById("music1").pause();
}

function PlayMusic2(){
	document.getElementById("music2").play();
}

function PauseMusic2(){
	document.getElementById("music2").pause();
}

function PlayMusic3(){
	document.getElementById("music3").play();
}

function PauseMusic3(){
	document.getElementById("music3").pause();
}

function PlayMusic4(){
	document.getElementById("music4").play();
}

function PauseMusic4(){
	document.getElementById("music4").pause();
}

function PlayMusic5(){
	document.getElementById("music5").play();
}

function PauseMusic5(){
	document.getElementById("music5").pause();
}




 
/* *************************************** */
// One page navigation 
/* *************************************** */

$('.nav').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 1000,
    scrollThreshold: 0.1
});

// Block scrolling
	
$('.nav a').bind('click', function(e){
		if($(window).width() < 768){
			var $navMain = $(".navbar-collapse");
			$navMain.collapse('hide');
		}
		e.preventDefault();
});

/* Owl-Carousel Client Slider */
 
$(document).ready(function() {
  $("#portfolioOwl").owlCarousel({
		autoPlay: 3000,
		slideSpeed: 1200,
	  paginationSpeed : 500,
	  stopOnHover: true,
    items : 4,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [991,3],
    itemsTabletSmall : [767,2]
  }); 
});

/* tool-tip initialize */

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


/* Scroll to Top */  

$(".totop").hide();
$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop()>300)
		{
			$('.totop').fadeIn();
		} 
		else
		{
			$('.totop').fadeOut();
		}
	});

	$('.totop a').click(function (e) {
		e.preventDefault();
		$('body,html').animate({scrollTop: 0}, 1200);
	});

});