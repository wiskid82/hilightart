function Swipe(z,e){var s=function(){};var b=function(C){setTimeout(C||s,0)};var g={addEventListener:!!window.addEventListener,touch:("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch,transitions:(function(D){var E=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var C in E){if(D.style[E[C]]!==undefined){return true}}return false})(document.createElement("swipe"))};if(!z){return}var y=z.children[0];var k,q,l,A;e=e||{};var r=parseInt(e.startSlide,10)||0;var i=e.speed||300;e.continuous=e.continuous!==undefined?e.continuous:true;function a(){k=y.children;A=k.length;if(k.length<2){e.continuous=false}if(g.transitions&&e.continuous&&k.length<3){y.appendChild(k[0].cloneNode(true));y.appendChild(y.children[1].cloneNode(true));k=y.children}q=new Array(k.length);l=z.getBoundingClientRect().width||z.offsetWidth;y.style.width=(k.length*l)+"px";var D=k.length;while(D--){var C=k[D];C.style.width=l+"px";C.setAttribute("data-index",D);if(g.transitions){C.style.left=(D*-l)+"px";u(D,r>D?-l:(r<D?l:0),0)}}if(e.continuous&&g.transitions){u(c(r-1),-l,0);u(c(r+1),l,0)}if(!g.transitions){y.style.left=(r*-l)+"px"}z.style.visibility="visible"}function w(){if(e.continuous){B(r-1)}else{if(r){B(r-1)}}}function j(){if(e.continuous){B(r+1)}else{if(r<k.length-1){B(r+1)}}}function c(C){return(k.length+(C%k.length))%k.length}function B(C,E){if(r==C){return}if(g.transitions){var G=Math.abs(r-C)/(r-C);if(e.continuous){var F=G;G=-q[c(C)]/l;if(G!==F){C=-G*k.length+C}}var D=Math.abs(r-C)-1;while(D--){u(c((C>r?C:r)-D-1),l*G,0)}C=c(C);u(r,l*G,E||i);u(C,0,E||i);if(e.continuous){u(c(C-G),-(l*G),0)}}else{C=c(C);m(r*-l,C*-l,E||i)}r=C;b(e.callback&&e.callback(r,k[r]))}function u(C,E,D){f(C,E,D);q[C]=E}function f(D,G,F){var E=k[D];var C=E&&E.style;if(!C){return}C.webkitTransitionDuration=C.MozTransitionDuration=C.msTransitionDuration=C.OTransitionDuration=C.transitionDuration=F+"ms";C.webkitTransform="translate("+G+"px,0)translateZ(0)";C.msTransform=C.MozTransform=C.OTransform="translateX("+G+"px)"}function m(C,D,G){if(!G){y.style.left=D+"px";return}var F=+new Date;var E=setInterval(function(){var H=+new Date-F;if(H>G){y.style.left=D+"px";if(p){t()}e.transitionEnd&&e.transitionEnd.call(event,r,k[r]);clearInterval(E);return}y.style.left=(((D-C)*(Math.floor((H/G)*100)/100))+C)+"px"},4)}var p=e.auto||0;var h;function t(){h=setTimeout(j,p)}function d(){p=0;clearTimeout(h)}var x={};var o={};var v;var n={handleEvent:function(C){switch(C.type){case"touchstart":this.start(C);break;case"touchmove":this.move(C);break;case"touchend":b(this.end(C));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":b(this.transitionEnd(C));break;case"resize":b(a);break}if(e.stopPropagation){C.stopPropagation()}},start:function(C){var D=C.touches[0];x={x:D.pageX,y:D.pageY,time:+new Date};v=undefined;o={};y.addEventListener("touchmove",this,false);y.addEventListener("touchend",this,false)},move:function(C){if(C.touches.length>1||C.scale&&C.scale!==1){return}if(e.disableScroll){C.preventDefault()}var D=C.touches[0];o={x:D.pageX-x.x,y:D.pageY-x.y};if(typeof v=="undefined"){v=!!(v||Math.abs(o.x)<Math.abs(o.y))}if(!v){C.preventDefault();d();if(e.continuous){f(c(r-1),o.x+q[c(r-1)],0);f(r,o.x+q[r],0);f(c(r+1),o.x+q[c(r+1)],0)}else{o.x=o.x/((!r&&o.x>0||r==k.length-1&&o.x<0)?(Math.abs(o.x)/l+1):1);f(r-1,o.x+q[r-1],0);f(r,o.x+q[r],0);f(r+1,o.x+q[r+1],0)}}},end:function(D){var E=+new Date-x.time;var C=Number(E)<250&&Math.abs(o.x)>20||Math.abs(o.x)>l/2;var F=!r&&o.x>0||r==k.length-1&&o.x<0;if(e.continuous){F=false}var G=o.x<0;if(!v){if(C&&!F){if(G){if(e.continuous){u(c(r-1),-l,0);u(c(r+2),l,0)}else{u(r-1,-l,0)}u(r,q[r]-l,i);u(c(r+1),q[c(r+1)]-l,i);r=c(r+1)}else{if(e.continuous){u(c(r+1),l,0);u(c(r-2),-l,0)}else{u(r+1,l,0)}u(r,q[r]+l,i);u(c(r-1),q[c(r-1)]+l,i);r=c(r-1)}e.callback&&e.callback(r,k[r])}else{if(e.continuous){u(c(r-1),-l,i);u(r,0,i);u(c(r+1),l,i)}else{u(r-1,-l,i);u(r,0,i);u(r+1,l,i)}}}y.removeEventListener("touchmove",n,false);y.removeEventListener("touchend",n,false)},transitionEnd:function(C){if(parseInt(C.target.getAttribute("data-index"),10)==r){if(p){t()}e.transitionEnd&&e.transitionEnd.call(C,r,k[r])}}};a();if(p){t()}if(g.addEventListener){if(g.touch){y.addEventListener("touchstart",n,false)}if(g.transitions){y.addEventListener("webkitTransitionEnd",n,false);y.addEventListener("msTransitionEnd",n,false);y.addEventListener("oTransitionEnd",n,false);y.addEventListener("otransitionend",n,false);y.addEventListener("transitionend",n,false)}window.addEventListener("resize",n,false)}else{window.onresize=function(){a()}}return{setup:function(){a()},slide:function(C,D){d();B(C,D)},prev:function(){d();w()},next:function(){d();j()},stop:function(){d()},getPos:function(){return r},getNumSlides:function(){return A},kill:function(){d();y.style.width="";y.style.left="";var D=k.length;while(D--){var C=k[D];C.style.width="";C.style.left="";if(g.transitions){f(D,0,0)}}if(g.addEventListener){y.removeEventListener("touchstart",n,false);y.removeEventListener("webkitTransitionEnd",n,false);y.removeEventListener("msTransitionEnd",n,false);y.removeEventListener("oTransitionEnd",n,false);y.removeEventListener("otransitionend",n,false);y.removeEventListener("transitionend",n,false);window.removeEventListener("resize",n,false)}else{window.onresize=null}}}}if(window.jQuery||window.Zepto){(function(a){a.fn.Swipe=function(b){return this.each(function(){a(this).data("Swipe",new Swipe(a(this)[0],b))})}})(window.jQuery||window.Zepto)};