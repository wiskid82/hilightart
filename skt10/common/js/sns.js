 function encodeURL(str){
        var s0, i, s, u;
        s0 = "";                // encoded str
        for (i = 0; i < str.length; i++){   // scan the source
            s = str.charAt(i);
            u = str.charCodeAt(i);          // get unicode of the char
            if (s == " "){s0 += "+";}       // SP should be converted to "+"
            else {
                if ( u == 0x2a || u == 0x2d || u == 0x2e || u == 0x5f || ((u >= 0x30) && (u <= 0x39)) || ((u >= 0x41) && (u <= 0x5a)) || ((u >= 0x61) && (u <= 0x7a))){       // check for escape
                    s0 = s0 + s;            // don't escape
                }
                else {                  // escape
                    if ((u >= 0x0) && (u <= 0x7f)){     // single byte format
                        s = "0"+u.toString(16);
                        s0 += "%"+ s.substr(s.length-2);
                    }
                    else if (u > 0x1fffff){     // quaternary byte format (extended)
                        s0 += "%" + (0xf0 + ((u & 0x1c0000) >> 18)).toString(16);
                        s0 += "%" + (0x80 + ((u & 0x3f000) >> 12)).toString(16);
                        s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
                        s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
                    }
                    else if (u > 0x7ff){        // triple byte format
                        s0 += "%" + (0xe0 + ((u & 0xf000) >> 12)).toString(16);
                        s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
                        s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
                    }
                    else {                      // double byte format
                        s0 += "%" + (0xc0 + ((u & 0x7c0) >> 6)).toString(16);
                        s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
                    }
                }
            }
        } 
        return s0;
    }
    
	function Opensocial(url,names) {
        var winObj;
        winObj = window.open(url, names, "width=500, height=400, scrollbars=yes");
    }


window.fbAsyncInit = function() {
	FB.init({
		appId      : '385494844896704',           // live
		//appId      : '544400335662545',           // dev
		status     : true,                                 // Check Facebook Login status
		xfbml      : true,                                  // Look for social plugins on the page
		frictionlessRequests : true
	});
	//fbLogin();
	};
	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/all.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
/*
//fb 로그인
function fbLogin() {
	FB.login(function(response) {
		if (response.authResponse) {
			FB.api('/me', function(responseUser) {
				fbId = responseUser.id;
				fbNm = responseUser.name;
				FB.getLoginStatus(function(responseAuth) {
					//로그인성공
					//postFacebookPhoto();
					var fimg = $('#fimg').val();
					var args = {
						message :  scmsg,
						url :  fimg,
						height : 400
					}
					FB.api('/me/photos', 'post', args, function(response){
						alert("facebook share completion.");
					});
				});
			});
		} else {
			alert("권한획득 실패");
		}
	}, {scope: 'publish_stream,publish_actions'});
}*/

var scmsg="통화를 바꾸다. T전화의 시작! 검색되고 스팸없는 걸기편한 T전화를 지금 사이트에서 만나보세요";

function go_fbmain(){
	var menuNm = "T전화";
	
	var here = location.href;
	
	if(here.indexOf("/introduce/") != -1) {
		menuNm = "T 서비스";
	}
	if(here.indexOf("/blog/") != -1) {
		menuNm = "T 블로그";
	}
	if(here.indexOf("event") != -1) {
		menuNm = "T 이벤트";
	}
	if(here.indexOf("/contest/") != -1) {
		menuNm = "T 공모전";
	}
	if(here.indexOf("/information/") != -1) {
		menuNm = "T 정보수정";
	}
	if(here.indexOf("/customer/") != -1) {
		menuNm = "T 도움말";
	}
	
	
	
	//var fburl = "http://www.facebook.com/sharer/sharer.php?u=http://skt-phone.co.kr";
	//Opensocial(fburl,"facebook");
	FB.login(function(response) {
		if (response.authResponse) {
			var args = {
				//message : menuNm+ " - " + scmsg + " - http://skt-phone.co.kr",
				message : scmsg + " - http://www.skt-phone.co.kr",
				url : "http://skt-phone.co.kr/common/images/thumb/snsmainshare.jpg",
				height : 400
			}
			FB.api('/me/photos', 'post', args, function(response) { 
				alert("페이스북에 공유 되었습니다.");
				setGa('main-footer-facebook', '');
			});
		} else {
			alert("권한획득 실패");
		}
	}, {scope: 'publish_stream'});
}

function go_tw(){
	var menuNm = "T전화";
	
	var here = location.href;
	
	if(here.indexOf("/introduce/") != -1) {
		menuNm = "T 서비스";
	}
	if(here.indexOf("/blog/") != -1) {
		menuNm = "T 블로그";
	}
	if(here.indexOf("event") != -1) {
		menuNm = "T 이벤트";
	}
	if(here.indexOf("/contest/") != -1) {
		menuNm = "T 공모전";
	}
	if(here.indexOf("/information/") != -1) {
		menuNm = "T 정보수정";
	}
	if(here.indexOf("/customer/") != -1) {
		menuNm = "T 도움말";
	}
	
	var thisUrl = encodeURL("http://www.skt-phone.co.kr");
	var tmsg = 	encodeURL(scmsg);
	var twurl = "http://twitter.com/intent/tweet?text="+tmsg + " - " + thisUrl ;
	
	Opensocial(twurl,"twitter");
	setGa('main-footer-twitter', '');
}
function goFaceBook(msg,url,imgurl) {
	var msg2 = msg.substring(0,500);
	FB.ui({
		method: 'feed',
		name: 'SKT T전화',
		link: url,
		picture: 'https://skt-phone.co.kr/utl/web/imageSrc.do?path=&physical='+imgurl,
		//picture: 'http://tdev.xfb.kr'+imgurl,
		description: msg2
	}, function(response) {
		history.go(0);
	});
}
function fbShareView() {
	var fbTitle = $(".title").text();
	var fbContents = $(".detail").text();
	
	goFaceBook(fbTitle +" - "+ fbContents, document.URL, $("#strFileNm").val());
}
