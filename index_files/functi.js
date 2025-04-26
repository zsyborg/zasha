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


window.onload = function() {

$("#showMenu").click(function() {
	$("#showMenu").hide();
    $("#navi").css("z-index", "2");
    $("#navi").addClass("active");
    $("#ver").addClass("active");
});

$("#exitmenu").click(function() {
	$("#showMenu").show();
    $("#navi").removeClass("active");
    $("#navi").css("z-index", "0");
    $("#ver").removeClass("active");
});


}

}
/*
     FILE ARCHIVED ON 18:33:58 Oct 31, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:53:30 Apr 06, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.502
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.009
  esindex: 0.012
  cdx.remote: 19.248
  LoadShardBlock: 436.216 (3)
  PetaboxLoader3.datanode: 132.62 (5)
  PetaboxLoader3.resolve: 1149.146 (2)
  load_resource: 1198.082
  loaddict: 59.935
*/