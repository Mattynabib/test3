/* This is for the back to top item */

$(function () {
    var scroll_timer;
    var displayed = false;
    var $backToTop = $('#backToTop a');
    var $window = $(window);
    var top = $(document.body).children(0).position().top;

    /* react to scroll event on window */
    $window.scroll(function () {
        window.clearTimeout(scroll_timer);
        scroll_timer = window.setTimeout(function () {
            if($window.scrollTop() <= top+100)
            {
                displayed = false;
                $backToTop.fadeOut(500);
            }
            else if(displayed == false)
            {
                displayed = true;
                $backToTop.stop(true, true).show().click(function () { $backToTop.fadeOut(500); });
            }
        });
    });
});


/* This is to activate the phone-size menu opening link */

$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');

$menulink.click(function() {
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  $("#mainContent").toggleClass('pushDown');
  return false;
});
if ($("#wrapper").width() < 768) {
	$("#mainContent").removeClass('pushDown');
	$menulink.removeClass('active');
  	$menu.removeClass('active');
	}
	
	
	
/* This is to activate the accordion menus */
$('.accordionitem').click(function() {
	var $theHeight = $(this).find('.accordionContents p').height()+20;
	if ($(this).find('.accordionContents').css('max-height') === "0px") {
		$(this).find('.accordionContents').toggleClass('openMe').css('max-height',$theHeight);
	} else {
		$(this).find('.accordionContents').toggleClass('openMe').css('max-height','0px');
	}
	  return false;
});

/* This is AJAX stuff */
$.ajaxSetup ({  
    cache: false  
});  



/* Audio player parts */

$('.playerText').click(function() {
	  $(this).parent().toggleClass('openIt');
	  return false;
});


  var volNum = (Number($('.daVolume').html()) / 100);
  console.log("Volume should be set to "+volNum);
  audiojs.events.ready(function() {
    var as = audiojs.createAll();
	theAudio = as[0];
	theAudio.setVolume(volNum);
  });
});
