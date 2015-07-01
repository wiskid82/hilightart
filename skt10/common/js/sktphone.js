var device_name = null; //디바이스체크 변수
var $button = null;
var visualDirectMenu,usedMenu,usedDirectMenu2,usedDirectMenu3;
var $motionChk = false;
var $hrefVal = null;
$(function(){
	init();
	initEventListener();
	mainVisual('visualWrap',0);

	
});


//초기화
function init(){
	check_device();
	visualDirectMenu = new Menu({
		wrap : 'directVisual',
		item : 'a',
		onClass : 'on',
		start : 0
	});
	usedDirectMenu = new Menu({
		wrap : 'direct',
		item : 'a',
		onClass : 'on',
		start : 0
	});
	usedDirectMenu2 = new Menu({
		wrap : 'direct2',
		item : 'a',
		onClass : 'on',
		start : 0
	});
	usedDirectMenu3 = new Menu({
		wrap : 'storydir',
		item : 'a',
		onClass : 'on',
		start : 0
	});
	
	window.usedSlide0 = new Swipe(document.getElementById('noticeWrap'), {
		
		startSlide: 0,
		//continuous: true,
		disableScroll: false,
		stopPropagation: true,
		// callback: function(index, element) {},
		transitionEnd: function(index, element) {
			usedDirectMenu.setOn(index);
			//console.log(index);
		}

	}); 	
	
	window.usedSlide = new Swipe(document.getElementById('usedWrap'), {
		
		startSlide: 0,
		//continuous: true,
		disableScroll: false,
		stopPropagation: true,
		// callback: function(index, element) {},
		transitionEnd: function(index, element) {
			usedDirectMenu.setOn(index);
			//console.log(index);
		}

	}); 
	window.usedSlide2 = new Swipe(document.getElementById('videoWrap'), {
		
		startSlide: 0,
		continuous: true,
		disableScroll: true,
		stopPropagation: true,
		// callback: function(index, element) {},
		transitionEnd: function(index, element) {
			usedDirectMenu.setOn(index);
			//console.log(index);
		}
	
	}); 
	window.usedSlide2 = new Swipe(document.getElementById('video'), {
		
		startSlide: 0,
		continuous: true,
		disableScroll: false,
		stopPropagation: true,
		// callback: function(index, element) {}, 
		transitionEnd: function(index, element) {
			usedDirectMenu3.setOn(index);
			//console.log(index);
		}
	
	}); 
	
	$("input, textarea").placeholder();
}


