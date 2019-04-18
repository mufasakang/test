//숫자만 입력
var onlyNumber = function(pId){
	$("input[name="+pId+"]").on("keyup", function() {	$(this).val( $(this).val().replace(/[^0-9]/gi,"") );});
	$("input[name="+pId+"]").on("blur", function() {	$(this).val( $(this).val().replace(/[^0-9]/gi,"") );});
};

//자리수 제한
var setMaxLenght = function(pId, pCnt){
	$("input[name="+pId+"]").on("keyup", function() { if($(this).val().length > pCnt){ alert("최대 "+pCnt+"까지 입력 가능합니다."); $(this).val($(this).val().substring(0, pCnt));$(this).focus();}});
};

//자리수 고정
var setLenght = function(pId, pCnt){
	$("input[name="+pId+"]").on("blur", function() { if($(this).val().length != pCnt){ alert("입력 값이 "+pCnt+"자리가 아닙니다."); $(this).val('');$(this).focus();}});
};

//최대 숫자
var setMaxNum = function(pId, pCnt){
	$("input[name="+pId+"]").on("blur", function() { if(Number($(this).val()) > pCnt){ alert("입력 값이 "+pCnt+"보다 큽니다."); $(this).val('');$(this).focus();}});
};

//체크박스 전체컨트롤
var setAllCheckboxControl = function(pId, pTargetName){

	if($('#'+pId).is(':checked')){
		$('input[name='+pTargetName+']').prop('checked',true);
	}else{
		$('input[name='+pTargetName+']').prop('checked',false);
	}
};

//처리 중 화면
function wrapWindowByMask(){
	//화면의 높이와 너비를 구한다.
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();

	//마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
	$('#mask').css({'width':maskWidth,'height':maskHeight});

	//애니메이션 효과
	$('#mask').fadeIn(1000);
	$('#mask').fadeTo("slow",0.8);
}

//이메일 체크 정규식
var IsEmail = function(pStr){
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(pStr)
};

// 자바스크립트로 PHP의 number_format 흉내를 냄
// 숫자에 , 를 출력
function number_format(data)
{
	var tmp = '';
    var number = '';
    var cutlen = 3;
    var comma = ',';
    var i;

    var sign = data.match(/^[\+\-]/);
    if(sign) {
        data = data.replace(/^[\+\-]/, "");
    }

    len = data.length;
    mod = (len % cutlen)+1;
    k = cutlen - mod;
    for (i=0; i<data.length; i++)
    {
        number = number + data.charAt(i);

        if (i < data.length - 1)
        {
            k++;
            if ((k % cutlen) == 0)
            {
                number = number + comma;
                k = 0;
            }
        }
    }

    if(sign != null)
        number = sign+number;

    return number;
}

// , 를 없앤다.
function no_comma(data)
{
    var tmp = '';
    var comma = ',';
    var i;

    for (i=0; i<data.length; i++)
    {
        if (data.charAt(i) != comma)
            tmp += data.charAt(i);
    }
    return tmp;
}

//1000단위 콤마
function AddComma(data_value) {

	var txtNumber = '' + data_value;    // 입력된 값을 문자열 변수에 저장합니다.

	if (isNaN(txtNumber) || txtNumber == "") {    // 숫자 형태의 값이 정상적으로 입력되었는지 확인합니다.
		alert("숫자만 입력 하세요");
		return;
	}
	else {
		var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');    // 정규식 형태 생성
		var arrNumber = txtNumber.split('.');    // 입력받은 숫자를 . 기준으로 나눔. (정수부와 소수부분으로 분리)
		arrNumber[0] += '.'; // 정수부 끝에 소수점 추가

		do {
			arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2'); // 정수부에서 rxSplit 패턴과 일치하는 부분을 찾아 replace 처리
		} while (rxSplit.test(arrNumber[0])); // 정규식 패턴 rxSplit 가 정수부 내에 있는지 확인하고 있다면 true 반환. 루프 반복.

		if (arrNumber.length > 1) { // txtNumber를 마침표(.)로 분리한 부분이 2개 이상이라면 (즉 소수점 부분도 있다면)
			return arrNumber.join(''); // 배열을 그대로 합칩. (join 함수에 인자가 있으면 인자를 구분값으로 두고 합침)
		}
		else { // txtNumber 길이가 1이라면 정수부만 있다는 의미.
			return arrNumber[0].split('.')[0]; // 위에서 정수부 끝에 붙여준 마침표(.)를 그대로 제거함.
		}
	}
}

//앞뒤공백제거
function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
}


var Base64 = {

	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	getParameter : function(url,name){
		var rtnval="";
		try
		{
			var parameters = new Array();
			parameters = (url.slice(url.indexOf("?")+1, url.length)).split("&");
			for( var i = 0 ; i < parameters.length ; i++ ) {
				if(parameters[i].indexOf(name) != -1) {
					rtnval = parameters[i].split("=")[1];
					if(rtnval == undefined || rtnval == null || rtnval == "undefined") {
						rtnval = "";
					}
				}
			}
		}
		catch(e)
		{
			rtnval = "";
		}
		return rtnval;
	},


	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}

		return output;
	},

	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		output = Base64._utf8_decode(output);

		return output;

	},

	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while ( i < utftext.length ) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	},

	URLEncode : function (string) {
		return escape(this._utf8_encode(string));
	},

	// public method for url decoding
	URLDecode : function (string) {
		return this._utf8_decode(unescape(string));
	}
}



function dynamicForm(startpix, layername) {

	//		var scrollStart = 700;   // 시작위치
	//		var layerName = '#scroll_layer';  //나타낼 레이아웃

	var scrollStart = startpix;   // 시작위치
	var layerName = '#'  + layername;  //나타낼 레이아웃

	//		alert($(layerName).offset().top);

	var layerHeight = $(layerName).height();

	var windowHeight = $(window).height();		//화면크기

	scrollStart = ($(layerName).length > 0) ? ($(layerName).offset().top - windowHeight)  : scrollStart;

	var top = windowHeight + scrollStart;  //최초 레이어 위치 지정


	//처음 로드시 레이어 없어지기
	$(layerName).hide();

	// 스크롤 이벤트
	$(document).on("scroll",function(){

		//			console.log($(window).scrollTop() + ":" + $(window).height() + ":" + scrollStart);

		//최초 중앙시 레이어 보이기
		if($(window).scrollTop() >= scrollStart)  {
			//처음 로드시 레이어 없어지기
			$(layerName).show();
			//					$(layerName).css({'position':'absolute','top' : top   +'px','left':'0'});

			//				} else if($(window).scrollTop() >= scrollStart && $(window).scrollTop() >=  (scrollStart + layerHeight))  {

				// css 하단으로 보내기
				$(layerName).css({'position':'fixed','bottom':'0','left':'0'});
			} else {
				$(layerName).hide();
			}
		});
}


//위에서 아래로 떨어지는 폼
function pullDownForm(startpix, layername) {

	var didScroll;
	//		var scrollStart = 700;   // 시작위치
	//		var layerName = '#scroll_layer';  //나타낼 레이아웃

	var scrollStart = startpix;   // 시작위치
	var layerName = '#'  + layername;  //나타낼 레이아웃
	var action = 'start'
	//		alert($(layerName).offset().top);

	var layerHeight = $(layerName).height();

	var windowHeight = $(window).height();		//화면크기

	scrollStart = ($(layerName).length > 0) ? ($(layerName).offset().top - windowHeight)  : scrollStart;

	var top = windowHeight + scrollStart;  //최초 레이어 위치 지정

	//		alert(scrollStart);

	//처음 로드시 레이어 없어지기
	//		$(layerName).hide();

	$(layerName).css({'position':'fixed','bottom':windowHeight,'left':'0'}).animate({
		bottom: 0,
	}, startpix, function() {
		// Animation complete.
	});
}

//스크롤에 따라 전화콜이 와우로 펼쳐지고 감춰짐
function callScroll (layerid, right) {

	var id = layerid;
	var didScroll;
	var right = right;
	var lastScrollTop = 0;
	var delta = 5;

	// 스크롤 이벤트
	$(document).on("scroll",function(){
		//			$('#' + layerid).css('right','0');

		didScroll = true;
	});

	//브라우저 부하를 줄이기 위해
	setInterval(function() {
		if (didScroll) {
			//스크롤를 위인지 아래인지 표하기위해
			oAdincTopBar();
			didScroll = false;
		}
	},
	250);

	// 스크롤 이벤트 위로 올렸는지, 아래로 내렸는지 확인
	oAdincTopBar = function() {
		try
		{
			var st = $(window).scrollTop();
			if(Math.abs(lastScrollTop - st) <= delta) return;

			if (st > lastScrollTop){ // Scroll Down
				$('#' + layerid).css('right','0');
			} else { // Scroll Up
				$('#' + layerid).css('right',right);
			}

			//$('#' + layerid).css('right',right);
			lastScrollTop = st;
		}
		catch(e)
		{
			console.log('callScroll error : '+e.message);
			return'';
		}
	};

}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function GoLink(link){
	location.href = link;
};
