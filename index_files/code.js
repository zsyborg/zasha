var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");



$( document ).ready(function() {
  $('.multiple-items').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 2
	});

  $(".prev").on("click", function(){
  	$(".slick-prev")[0].click();
  });

  $(".nxt").on("click", function(){
  	$(".slick-next")[0].click();
  });

  //$('.about-title').text('About me');
  //$('.about-title').text('私について');

  
  		screenSlick();

  $(window).resize(function(){
  		screenSlick();
   });

function screenSlick(){
	if ($(window).width() <= 720){	
			$('.multiple-items').slick('unslick');
			$('.multiple-items').slick({
			  infinite: true,
			  slidesToShow: 1,
			  slidesToScroll: 1
			});
		}else if ($(window).width() <= 950 && $(window).width() > 720){	
			$('.multiple-items').slick('unslick');
			$('.multiple-items').slick({
			  infinite: true,
			  slidesToShow: 3,
			  slidesToScroll: 2
			});
		}else if ($(window).width() >= 951){	
			$('.multiple-items').slick('unslick');
			$('.multiple-items').slick({
			  infinite: true,
			  slidesToShow: 4,
			  slidesToScroll: 2
			});
		}	
}


});

}
/*
     FILE ARCHIVED ON 19:10:00 Oct 31, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:53:29 Apr 06, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.498
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.012
  esindex: 0.011
  cdx.remote: 17.593
  LoadShardBlock: 53.835 (3)
  PetaboxLoader3.datanode: 95.977 (5)
  load_resource: 558.994
  PetaboxLoader3.resolve: 482.977
  loaddict: 47.125
*/