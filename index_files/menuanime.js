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


{
	const items = Array.from(document.querySelectorAll('.menu > .menu__item'));

	class Item {
		constructor(el) {
			this.DOM = {};
			this.DOM.el = el;
			this.DOM.name = el.querySelector('.menu__item-name');
			charming(this.DOM.name);
			this.DOM.nameLetters = Array.from(this.DOM.name.querySelectorAll('span'));
			this.initEvents();
		}
		initEvents() {
			this.mouseenterFn = () => this.mouseTimeout = setTimeout(() => {
				this.isActive = true;
				anime.remove(this.DOM.nameLetters);
				anime({
					targets: this.DOM.nameLetters,
					duration: 800,
					easing: [0.7,0,0.3,1],
					scale: (t,i) => [1,anime.random(0,1) ? 0.8:1.4],
					translateX: (t,i) => {
						const elBounds = this.DOM.el.getBoundingClientRect();
						const x1 = elBounds.left + elBounds.width/2;
						const y1 = elBounds.top + elBounds.height/2;
						
						const targetBounds = t.getBoundingClientRect();
						const x2 = targetBounds.left + targetBounds.width/2;
						const y2 = targetBounds.top + targetBounds.height/2;

						const dist = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,3));
						const maxDist = Math.sqrt(Math.pow(elBounds.left-x1,2) + Math.pow(elBounds.top-y1,2));
						const maxTX = x2<x1?-250:250;

						return maxTX/maxDist*dist;
					},
					translateY: (t,i) => [0,anime.random(-40,40)],
					rotateZ: (t,i) => [0,anime.random(-20,40)],
					opacity: (t,i) => 0.3,
				});	
			}, 50);

			this.mouseleaveFn = () => {
				clearTimeout(this.mouseTimeout);
				if( !this.isActive ) return;
				this.isActive = false;
				anime.remove(this.DOM.nameLetters);
				anime({
					targets: this.DOM.nameLetters,
					duration: 800,
					easing: [0.7,0,0.3,1],
					scale: 1,
					translateX: 0,
					translateY: 0,
					rotateZ: 0,
					opacity: 1
				});
			};

			this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
			this.DOM.el.addEventListener('touchstart', this.mouseenterFn);
			this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
			this.DOM.el.addEventListener('touchend', this.mouseleaveFn);
		}
	};

	items.forEach(item => new Item(item));
};

}
/*
     FILE ARCHIVED ON 18:32:21 Oct 31, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:53:35 Apr 06, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.564
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 60.853
  LoadShardBlock: 115.912 (3)
  PetaboxLoader3.datanode: 207.783 (5)
  PetaboxLoader3.resolve: 5176.762 (2)
  load_resource: 5452.313
  loaddict: 113.312
*/