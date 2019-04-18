;(function ($) {
	"use strict";

	var loc = top.location.href;
	var folder = loc.split('/')[3];

	$(document).ready(function(){
		// 나이,전화번호,키,몸무게 숫자만 입력
		numCheck();

		$('.send_form').on('click', function () {
			setThenanumData($(this).data('num'));
			return false;
		});

		var arrXTel = ['000', '111', '122', '0000', '1111', '2222', '3333', '4444', '5555', '6666', '7777', '8888', '9999', '1234', '5678', '1212', '1000', '0001'];
		var arrXTel2 = ['010-8966-1180','010-1234-1234','010-2000-3575','010-3583-8942'];

		var bSend_ing = false;
		var checkForm = function (pType) {

			if($('#sel1_' + pType).length) {
				if ($('#sel1_' + pType + ' option:selected').val() == "선택해주세요") {
					alert("구분을 선택해주세요");
					$('#sel1_' + pType).focus();
					return false;
				}
			}

			if($('#sel2_' + pType).length) {
				if ($('#sel2_' + pType + ' option:selected').val() == "") {
					alert("지역을 선택해주세요");
					$('#sel2_' + pType).focus();
					return false;
				}
			}

			if($('#se1_' + pType).length) {
				if ($('#se1_' + pType + ' option:selected').val() == "") {
					alert($('#se1_'+pType).data('title'));
					$('#se1_' + pType).focus();
					return false;
				}
			}

			if($('#se2_' + pType).length) {
				if ($('#se2_' + pType + ' option:selected').val() == "") {
					alert($('#se2_'+pType).data('title'));
					$('#se2_' + pType).focus();
					return false;
				}
			}

			if($('#se3_' + pType).length) {
				if ($('#se3_' + pType + ' option:selected').val() == "") {
					alert($('#se3_'+pType).data('title'));
					$('#se3_' + pType).focus();
					return false;
				}
			}

			if($('#se4_' + pType).length) {
				if ($('#se4_' + pType + ' option:selected').val() == "") {
					alert($('#se4_'+pType).data('title'));
					$('#se4_' + pType).focus();
					return false;
				}
			}

			if($('#se5_' + pType).length) {
				if ($('#se5_' + pType + ' option:selected').val() == "") {
					alert($('#se5_'+pType).data('title'));
					$('#se5_' + pType).focus();
					return false;
				}
			}

			if($('input:radio[name=q1_'+pType+']').length) {
				if (!$('input:radio[name=q1_'+pType+']').is(':checked')) {
					alert("희망감량을 체크해주세요");
					$('input:radio[name=q1_'+pType+']').focus();
					return false;
				}
			}
			if($('input:radio[name=q2_'+pType+']').length) {
				if (!$('input:radio[name=q2_'+pType+']').is(':checked')) {
					alert("빼고싶은 부위를 체크해주세요");
					$('input:radio[name=q2_'+pType+']').focus();
					return false;
				}
			}

			if($('input:checkbox[name=c1_'+pType+']').length) {
				if (!$('input:checkbox[name=c1_'+pType+']').is(':checked')) {
					alert($('#c1_'+pType).data('title'));
					$('input:checkbox[name=c1_'+pType+']').focus();
					return false;
				}
			}
			if($('input:checkbox[name=c2_'+pType+']').length) {
				if (!$('input:checkbox[name=c2_'+pType+']').is(':checked')) {
					alert($('#c2_'+pType).data('title'));
					$('input:checkbox[name=c2_'+pType+']').focus();
					return false;
				}
			}
			if($('input:checkbox[name=c3_'+pType+']').length) {
				if (!$('input:checkbox[name=c3_'+pType+']').is(':checked')) {
					alert($('#c3_'+pType).data('title'));
					$('input:checkbox[name=c3_'+pType+']').focus();
					return false;
				}
			}

			if($('input:radio[name=r1_'+pType+']').length) {
				if (!$('input:radio[name=r1_'+pType+']').is(':checked')) {
					alert($('#r1_'+pType).data('title'));
					$('input:radio[name=r1_'+pType+']').focus();
					return false;
				}
			}
			if($('input:radio[name=r2_'+pType+']').length) {
				if (!$('input:radio[name=r2_'+pType+']').is(':checked')) {
					alert($('#r2_'+pType).data('title'));
					$('input:radio[name=r2_'+pType+']').focus();
					return false;
				}
			}
			if($('input:radio[name=r3_'+pType+']').length) {
				if (!$('input:radio[name=r3_'+pType+']').is(':checked')) {
					alert($('#r3_'+pType).data('title'));
					$('input:radio[name=r3_'+pType+']').focus();
					return false;
				}
			}
			if($('input:radio[name=r4_'+pType+']').length) {
				if (!$('input:radio[name=r4_'+pType+']').is(':checked')) {
					alert($('#r4_'+pType).data('title'));
					$('input:radio[name=r4_'+pType+']').focus();
					return false;
				}
			}
			if($('input:radio[name=r5_'+pType+']').length) {
				if (!$('input:radio[name=r5_'+pType+']').is(':checked')) {
					alert($('#r5_'+pType).data('title'));
					$('input:radio[name=r5_'+pType+']').focus();
					return false;
				}
			}

			if($('#name_' + pType + ':not(:hidden)').length) {
				if ($('#name_' + pType).val().replace(/ /g, "") == "") {
					alert("이름을 입력해주세요");
					$('#name_' + pType).focus();
					return false;
				}
			}

			if($('#tel_' + pType).length) {
				if ($('#tel_' + pType).val().replace(/ /g, "") == "") {
					alert("전화번호를 입력해주세요");
					$('#tel_' + pType).focus();
					return false;
				}
			}
			if($('#tel1_' + pType).length) {
				if ($('#tel1_' + pType).val().replace(/ /g, "") == "") {
					alert("전화번호를 입력해주세요");
					$('#tel1_' + pType).focus();
					return false;
				}
			}
			if($('#tel2_' + pType).length) {
				if ($('#tel2_' + pType).val().replace(/ /g, "") == "") {
					alert("전화번호를 입력해주세요");
					$('#tel2_' + pType).focus();
					return false;
				}
				if(folder=='24mall01' || folder=='24mall02' || folder=='24mall' || folder=='lottom01') {
					if($.inArray($('#tel2_' + pType).val(), arrXTel) != -1){
						alert("올바른 전화번호를 입력해주세요");
						$('#tel2_' + pType).focus();
						return false;
					}
				}
				// 전화번호 가운데 자리 3자리 이상만 가능
				if(folder=='rg3sp50mg' || folder=='belo01' || folder=='belo02' || folder=='loma01' || folder=='lottom01' || folder=='beloe01') {
					var num = $('#tel2_' + pType).val().toString();
					var numDigit = num.length;
					if(numDigit<3) {
						alert("올바른 전화번호를 입력해주세요");
						$('#tel2_' + pType).focus();
						return false;
					}
				}
			}
			if($('#tel3_' + pType).length) {
				if ($('#tel3_' + pType).val().replace(/ /g, "") == "") {
					alert("전화번호를 입력해주세요");
					$('#tel3_' + pType).focus();
					return false;
				}
				if(folder=='24mall01' || folder=='24mall02' || folder=='24mall' || folder=='lottom01') {
					if($.inArray($('#tel3_' + pType).val(), arrXTel) != -1){
						alert("올바른 전화번호를 입력해주세요");
						$('#tel3_' + pType).focus();
						return false;
					}
				}
				// 전화번호 마지막 자리 4자리 이상만 가능
				if(folder=='rg3sp50mg' || folder=='belo01' || folder=='belo02' || folder=='loma01' || folder=='lottom01' || folder=='beloe01') {
					var num = $('#tel3_' + pType).val().toString();
					var numDigit = num.length;
					if(numDigit<4) {
						alert("올바른 전화번호를 입력해주세요");
						$('#tel3_' + pType).focus();
						return false;
					}
				}
				// 해당 번호 입력 안 되도록
				if(folder=='doctors' || folder=='wellz' || folder=='stt01') {
					var tel33 = $('#tel1_' + pType).val()+'-'+$('#tel2_' + pType).val()+'-'+$('#tel3_' + pType).val();
					if($.inArray(tel33, arrXTel2) != -1){
						alert("올바른 전화번호를 입력해주세요");
						$('#tel3_' + pType).focus();
						return false;
					}
				}
			}

			if($('#phone1_' + pType).length) {
				if ($('#phone1_' + pType).val().replace(/ /g, "") == "") {
					alert("전화번호를 입력해주세요");
					$('#phone1_' + pType).focus();
					return false;
				}
			}
			if($('#phone2_' + pType).length) {
				if ($('#phone2_' + pType).val().replace(/ /g, "") == "") {
					alert("전화번호를 입력해주세요");
					$('#phone2_' + pType).focus();
					return false;
				}
			}
			if($('#phone3_' + pType).length) {
				if ($('#phone3_' + pType).val().replace(/ /g, "") == "") {
					alert("전화번호를 입력해주세요");
					$('#phone3_' + pType).focus();
					return false;
				}
			}

			if($('#addr_' + pType + ':not(:hidden)').length) {
				if ($('#addr_' + pType).val().replace(/ /g, "") == "") {
					alert("거주지를 입력해주세요");
					$('#addr_' + pType).focus();
					return false;
				}
			}
			if($('#addr2_' + pType + ':not(:hidden)').length) {
				if ($('#addr2_' + pType).val().replace(/ /g, "") == "") {
					alert("주소를 입력해주세요");
					$('#addr2_' + pType).focus();
					return false;
				}
			}

			if($('#father_' + pType + ':not(:hidden)').length) {
				if ($('#father_' + pType).val().replace(/ /g, "") == "") {
					alert("아빠 키를 입력해주세요");
					$('#father_' + pType).focus();
					return false;
				}
			}
			if($('#mother_' + pType + ':not(:hidden)').length) {
				if ($('#mother_' + pType).val().replace(/ /g, "") == "") {
					alert("엄마 키를 입력해주세요");
					$('#mother_' + pType).focus();
					return false;
				}
			}
			if($('#name2_' + pType + ':not(:hidden)').length) {
				if ($('#name2_' + pType).val().replace(/ /g, "") == "") {
					alert("자녀 이름을 입력해주세요");
					$('#name2_' + pType).focus();
					return false;
				}
			}

			if($('input:radio[name=gender_'+pType+']').length) {
				if (!($('input:radio[name=gender_'+pType+']').is(':checked'))) {
					alert("성별을 선택해주세요");
					$('#gender_' + pType).focus();
					return false;
				}
			}
			if($('#age_' + pType + ':not(:hidden)').length) {
				if ($('#age_' + pType).val().replace(/ /g, "") == "") {
					alert("나이를 입력해주세요");
					$('#age_' + pType).focus();
					return false;
				}
			}

			if($('#place_' + pType + ':not(:hidden)').length) {
				if ($('#place_' + pType).val().replace(/ /g, "") == "") {
					alert("거주지를 입력해주세요");
					$('#place_' + pType).focus();
					return false;
				}
			}
			if($('#utime_' + pType + ':not(:hidden)').length) {
				if ($('#utime_' + pType).val().replace(/ /g, "") == "") {
					alert("통화가능시간을 입력해주세요");
					$('#utime_' + pType).focus();
					return false;
				}
			}

			if($('#height_' + pType + ':not(:hidden)').length) {
				if ($('#height_' + pType).val().replace(/ /g, "") == "") {
					alert("키를 입력해주세요");
					$('#height_' + pType).focus();
					return false;
				}
			}
			if($('#weight_' + pType + ':not(:hidden)').length) {
				if ($('#weight_' + pType).val().replace(/ /g, "") == "") {
					alert("체중을 입력해주세요");
					$('#weight_' + pType).focus();
					return false;
				}
			}
			if($('#hweight_' + pType + ':not(:hidden)').length) {
				if ($('#hweight_' + pType).val().replace(/ /g, "") == "") {
					alert("희망몸무게를 입력해주세요");
					$('#hweight_' + pType).focus();
					return false;
				}
			}
			if($('#minuskg_' + pType + ':not(:hidden)').length) {
				if ($('#minuskg_' + pType).val().replace(/ /g, "") == "") {
					alert("감량목표를 입력해주세요");
					$('#minuskg_' + pType).focus();
					return false;
				}
			}
			if($('#email_' + pType + ':not(:hidden)').length) {
				if ($('#email_' + pType).val().replace(/ /g, "") == "") {
					alert("이메일을 입력해주세요");
					$('#email_' + pType).focus();
					return false;
				}
			}

			if($('#money_' + pType + ':not(:hidden)').length) {
				if ($('#money_' + pType).val().replace(/ /g, "") == "") {
					alert("희망금액을 입력해주세요");
					$('#money_' + pType).focus();
					return false;
				}
			}
			if($('#area_' + pType + ':not(:hidden)').length) {
				if ($('#area_' + pType).val().replace(/ /g, "") == "") {
					alert("지역을 입력해주세요");
					$('#area_' + pType).focus();
					return false;
				}
			}
			if($('#time_' + pType + ':not(:hidden)').length) {
				if ($('#time_' + pType).val().replace(/ /g, "") == "") {
					alert("통화가능시간을 입력해주세요");
					$('#time_' + pType).focus();
					return false;
				}
			}
			if($('#move_date_' + pType + ':not(:hidden)').length) {
				if ($('#move_date_' + pType).val().replace(/ /g, "") == "") {
					alert("이사일자를 입력해주세요");
					$('#move_date_' + pType).focus();
					return false;
				}
			}

			if($('#money2_' + pType + ':not(:hidden)').length) {
				if ($('#money2_' + pType).val().replace(/ /g, "") == "") {
					alert("채무액을 입력해주세요");
					$('#money2_' + pType).focus();
					return false;
				}
			}
			if($('#time2_' + pType + ':not(:hidden)').length) {
				if ($('#time2_' + pType).val().replace(/ /g, "") == "") {
					alert("연락 가능 시간을 입력해주세요");
					$('#time2_' + pType).focus();
					return false;
				}
			}
			if($('#memo2_' + pType + ':not(:hidden)').length) {
				if ($('#memo2_' + pType).val().replace(/ /g, "") == "") {
					alert("연락 가능 시간을 입력해주세요");
					$('#memo2_' + pType).focus();
					return false;
				}
			}

			if($('#s1_' + pType).length) {
				if ($('#s1_' + pType + ' option:selected').val() == "선택해주세요") {
					alert($('#s1_'+pType).data('title'));
					$('#s1_' + pType).focus();
					return false;
				}
			}
			if($('#s2_' + pType).length) {
				if ($('#s2_' + pType + ' option:selected').val() == "선택해주세요") {
					alert($('#s2_'+pType).data('title'));
					$('#s2_' + pType).focus();
					return false;
				}
			}
			if($('#s3_' + pType).length) {
				if ($('#s3_' + pType + ' option:selected').val() == "선택해주세요") {
					alert($('#s3_'+pType).data('title'));
					$('#s3_' + pType).focus();
					return false;
				}
			}
			if($('#s4_' + pType).length) {
				if ($('#s4_' + pType + ' option:selected').val() == "선택해주세요") {
					alert($('#s4_'+pType).data('title'));
					$('#s4_' + pType).focus();
					return false;
				}
			}
			if($('#s5_' + pType).length) {
				if ($('#s5_' + pType + ' option:selected').val() == "선택해주세요") {
					alert($('#s5_'+pType).data('title'));
					$('#s5_' + pType).focus();
					return false;
				}
			}
			if($('#s6_' + pType).length) {
				if ($('#s6_' + pType + ' option:selected').val() == "선택해주세요") {
					alert($('#s6_'+pType).data('title'));
					$('#s6_' + pType).focus();
					return false;
				}
			}
			if($('#s7_' + pType).length) {
				if ($('#s7_' + pType + ' option:selected').val() == "선택해주세요") {
					alert($('#s7_'+pType).data('title'));
					$('#s7_' + pType).focus();
					return false;
				}
			}
			if($('#s8_' + pType).length) {
				if ($('#s8_' + pType + ' option:selected').val() == "선택해주세요") {
					alert($('#s8_'+pType).data('title'));
					$('#s8_' + pType).focus();
					return false;
				}
			}
			if($('#s9_' + pType).length) {
				if ($('#s9_' + pType + ' option:selected').val() == "선택해주세요") {
					alert($('#s9_'+pType).data('title'));
					$('#s9_' + pType).focus();
					return false;
				}
			}
			if($('#s10_' + pType).length) {
				if ($('#s10_' + pType + ' option:selected').val() == "선택해주세요") {
					alert($('#s10_'+pType).data('title'));
					$('#s10_' + pType).focus();
					return false;
				}
			}
			if($('#s11_' + pType).length) {
				if ($('#s11_' + pType + ' option:selected').val() == "선택해주세요") {
					alert($('#s11_'+pType).data('title'));
					$('#s11_' + pType).focus();
					return false;
				}
			}
			if($('#s12_' + pType).length) {
				if ($('#s12_' + pType + ' option:selected').val() == "선택해주세요") {
					alert($('#s12_'+pType).data('title'));
					$('#s12_' + pType).focus();
					return false;
				}
			}

			if($('#agree_' + pType).length) {
				if(!($('#agree_' + pType).prop('checked'))) {
					alert('개인정보 수집 및 이용에 동의해주세요');
					$('#agree_' + pType).focus();
					return false;
				}
			}
			if($('#agree1_' + pType).length) {
				if(!($('#agree1_' + pType).prop('checked'))) {
					alert('개인정보 수집 및 이용에 동의해주세요');
					$('#agree1_' + pType).focus();
					return false;
				}
			}
			if($('#agree2_' + pType).length) {
				if(!($('#agree2_' + pType).prop('checked'))) {
					alert('이용약관에 동의해주세요');
					$('#agree2_' + pType).focus();
					return false;
				}
			}
			if($('#agree3_' + pType).length) {
				if(!($('#agree3_' + pType).prop('checked'))) {
					alert('광고성 문자메시지 수신동의해주세요');
					$('#agree3_' + pType).focus();
					return false;
				}
			}
			if($('#agree5_' + pType).length) {
				if(!($('#agree5_' + pType).prop('checked'))) {
					alert('제3자 정보제공 동의해주세요');
					$('#agree5_' + pType).focus();
					return false;
				}
			}
			return true;
		};
		var setThenanumData = function(sNum){
			if (!checkForm(sNum)){
				return;
			}

			if (bSend_ing){
				alert('이미 접수하셨습니다.');
				return;
			}
			bSend_ing = true;

			// form 변수
			var params = {};
			var indexNum = 1;
			var sTel = '';
			var snum1 = '';
			var snum2 = '';
			var snum3 = '';
			var snum4 = '';
			var snum5 = '';
			// params['datakind'] = Base64.encode(title);
			// params['bannerid'] = Base64.encode(bannerid);
			// params['mediaid'] = Base64.encode(mediaid);
			// params['pageid'] = Base64.encode(pageid);

			$('#form'+sNum+' .input').each(function(index,element){
				if($(this).data('tel')) {
					if($(this).data('tel')==1) {
						sTel = $(this).val();
					} else {
						sTel = sTel + '-' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('tel')] = $(this).val();

					if($(this).data('tel')==3) {
						params['data'+indexNum] = sTel;
						++indexNum;
					}
				} else if($(this).data('num1')) {
					if($(this).data('num1')==1) {
						snum1 = $(this).val();
					} else {
						snum1 = snum1 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num1')] = $(this).val();

					if($(this).data('num1')==3) {
						params['data'+indexNum] = snum1;
						++indexNum;
					}
				} else if($(this).data('num2')) {
					if($(this).data('num2')==1) {
						snum2 = $(this).val();
					} else {
						snum2 = snum2 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num2')] = $(this).val();

					if($(this).data('num2')==3) {
						params['data'+indexNum] = snum2;
						++indexNum;
					}
				} else if($(this).data('num3')) {
					if($(this).data('num3')==1) {
						snum3 = $(this).val();
					} else {
						snum3 = snum3 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num3')] = $(this).val();

					if($(this).data('num3')==3) {
						params['data'+indexNum] = snum3;
						++indexNum;
					}
				} else if($(this).data('num4')) {
					if($(this).data('num4')==1) {
						snum4 = $(this).val();
					} else {
						snum4 = snum4 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num4')] = $(this).val();

					if($(this).data('num4')==3) {
						params['data'+indexNum] = snum4;
						++indexNum;
					}
				} else if($(this).data('num5')) {
					if($(this).data('num5')==1) {
						snum5 = $(this).val();
					} else {
						snum5 = snum5 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num5')] = $(this).val();

					if($(this).data('num5')==2) {
						params['data'+indexNum] = snum5;
						++indexNum;
					}
				} else {
					if($(this).attr('name')=='gender_'+sNum) {
						if ($('input:radio[name=gender_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=gender_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='q1_'+sNum) {
						if ($('input:radio[name=q1_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=q1_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='q2_'+sNum) {
						if ($('input:radio[name=q2_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=q2_'+sNum+']:checked').val();
						}
					}

					else if($(this).attr('name')=='r1_'+sNum) {
						if ($('input:radio[name=r1_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=r1_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='r2_'+sNum) {
						if ($('input:radio[name=r2_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=r2_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='r3_'+sNum) {
						if ($('input:radio[name=r3_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=r3_'+sNum+']:checked').val();
						}
					}

					else if($(this).attr('name')=='c1_'+sNum) {
						if ($('input:checkbox[name=c1_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=c1_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						}
					}
					else if($(this).attr('name')=='c2_'+sNum) {
						if ($('input:checkbox[name=c2_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=c2_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						}
					}
					else if($(this).attr('name')=='c3_'+sNum) {
						if ($('input:checkbox[name=c3_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=c3_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						}
					}
					else if($(this).attr('name')=='agree10_'+sNum) {
						if ($('input:checkbox[name=agree10_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=agree10_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						} else {
							params['data'+indexNum] = 'N';
						}
					}
					else {
						params['data'+indexNum] = $(this).val();
					}
					++indexNum;
				}
			});

			$('#form'+sNum+' .input1').each(function(index,element){
				if($(this).data('tel')) {
					if($(this).data('tel')==1) {
						sTel = $(this).val();
					} else {
						sTel = sTel + '-' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('tel')] = $(this).val();

					if($(this).data('tel')==3) {
						params['data'+indexNum] = sTel;
						++indexNum;
					}
				} else if($(this).data('num1')) {
					if($(this).data('num1')==1) {
						snum1 = $(this).val();
					} else {
						snum1 = snum1 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num1')] = $(this).val();

					if($(this).data('num1')==3) {
						params['data'+indexNum] = snum1;
						++indexNum;
					}
					// console.log($(this).data('num1'));
					// console.log(snum1);
				} else if($(this).data('num2')) {
					if($(this).data('num2')==1) {
						snum2 = $(this).val();
					} else {
						snum2 = snum2 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num2')] = $(this).val();

					if($(this).data('num2')==3) {
						params['data'+indexNum] = snum2;
						++indexNum;
					}
				} else if($(this).data('num3')) {
					if($(this).data('num3')==1) {
						snum3 = $(this).val();
					} else {
						snum3 = snum3 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num3')] = $(this).val();

					if($(this).data('num3')==3) {
						params['data'+indexNum] = snum3;
						++indexNum;
					}
				} else if($(this).data('num4')) {
					if($(this).data('num4')==1) {
						snum4 = $(this).val();
					} else {
						snum4 = snum4 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num4')] = $(this).val();

					if($(this).data('num4')==3) {
						params['data'+indexNum] = snum4;
						++indexNum;
					}
				} else if($(this).data('num5')) {
					if($(this).data('num5')==1) {
						snum5 = $(this).val();
					} else {
						snum5 = snum5 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num5')] = $(this).val();

					if($(this).data('num5')==2) {
						params['data'+indexNum] = snum5;
						++indexNum;
					}
				} else {
					if($(this).attr('name')=='gender_'+sNum) {
						if ($('input:radio[name=gender_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=gender_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='q1_'+sNum) {
						if ($('input:radio[name=q1_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=q1_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='q2_'+sNum) {
						if ($('input:radio[name=q2_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=q2_'+sNum+']:checked').val();
						}
					}

					else if($(this).attr('name')=='r1_'+sNum) {
						if ($('input:radio[name=r1_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=r1_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='r2_'+sNum) {
						if ($('input:radio[name=r2_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=r2_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='r3_'+sNum) {
						if ($('input:radio[name=r3_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=r3_'+sNum+']:checked').val();
						}
					}

					else if($(this).attr('name')=='c1_'+sNum) {
						if ($('input:checkbox[name=c1_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=c1_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						}
					}
					else if($(this).attr('name')=='c2_'+sNum) {
						if ($('input:checkbox[name=c2_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=c2_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						}
					}
					else if($(this).attr('name')=='c3_'+sNum) {
						if ($('input:checkbox[name=c3_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=c3_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						}
					}
					else if($(this).attr('name')=='agree10_'+sNum) {
						if ($('input:checkbox[name=agree10_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=agree10_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						} else {
							params['data'+indexNum] = 'N';
						}
					}
					else {
						params['data'+indexNum] = $(this).val();
					}
					++indexNum;
				}
			});

			$('#form'+sNum+' .input2').each(function(index,element){
				if($(this).data('tel')) {
					if($(this).data('tel')==1) {
						sTel = $(this).val();
					} else {
						sTel = sTel + '-' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('tel')] = $(this).val();

					if($(this).data('tel')==3) {
						params['data'+indexNum] = sTel;
						++indexNum;
					}
				} else if($(this).data('num1')) {
					if($(this).data('num1')==1) {
						snum1 = $(this).val();
					} else {
						snum1 = snum1 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num1')] = $(this).val();

					if($(this).data('num1')==3) {
						params['data'+indexNum] = snum1;
						++indexNum;
					}
				} else if($(this).data('num2')) {
					if($(this).data('num2')==1) {
						snum2 = $(this).val();
					} else {
						snum2 = snum2 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num2')] = $(this).val();

					if($(this).data('num2')==3) {
						params['data'+indexNum] = snum2;
						++indexNum;
					}
				} else if($(this).data('num3')) {
					if($(this).data('num3')==1) {
						snum3 = $(this).val();
					} else {
						snum3 = snum3 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num3')] = $(this).val();

					if($(this).data('num3')==3) {
						params['data'+indexNum] = snum3;
						++indexNum;
					}
				} else if($(this).data('num4')) {
					if($(this).data('num4')==1) {
						snum4 = $(this).val();
					} else {
						snum4 = snum4 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num4')] = $(this).val();

					if($(this).data('num4')==3) {
						params['data'+indexNum] = snum4;
						++indexNum;
					}
				} else if($(this).data('num5')) {
					if($(this).data('num5')==1) {
						snum5 = $(this).val();
					} else {
						snum5 = snum5 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num5')] = $(this).val();

					if($(this).data('num5')==2) {
						params['data'+indexNum] = snum5;
						++indexNum;
					}
				} else {
					if($(this).attr('name')=='gender_'+sNum) {
						if ($('input:radio[name=gender_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=gender_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='q1_'+sNum) {
						if ($('input:radio[name=q1_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=q1_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='q2_'+sNum) {
						if ($('input:radio[name=q2_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=q2_'+sNum+']:checked').val();
						}
					}

					else if($(this).attr('name')=='r1_'+sNum) {
						if ($('input:radio[name=r1_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=r1_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='r2_'+sNum) {
						if ($('input:radio[name=r2_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=r2_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='r3_'+sNum) {
						if ($('input:radio[name=r3_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=r3_'+sNum+']:checked').val();
						}
					}

					else if($(this).attr('name')=='c1_'+sNum) {
						if ($('input:checkbox[name=c1_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=c1_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						}
					}
					else if($(this).attr('name')=='c2_'+sNum) {
						if ($('input:checkbox[name=c2_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=c2_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						}
					}
					else if($(this).attr('name')=='c3_'+sNum) {
						if ($('input:checkbox[name=c3_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=c3_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						}
					}
					else if($(this).attr('name')=='agree10_'+sNum) {
						if ($('input:checkbox[name=agree10_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=agree10_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						} else {
							params['data'+indexNum] = 'N';
						}
					}
					else {
						params['data'+indexNum] = $(this).val();
					}
					++indexNum;
				}
			});

			$('#form'+sNum+' .inputchk').each(function(index,element){
				if($(this).data('tel')) {
					if($(this).data('tel')==1) {
						sTel = $(this).val();
					} else {
						sTel = sTel + '-' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('tel')] = $(this).val();

					if($(this).data('tel')==3) {
						params['data'+indexNum] = sTel;
						++indexNum;
					}
				} else if($(this).data('num1')) {
					if($(this).data('num1')==1) {
						snum1 = $(this).val();
					} else {
						snum1 = snum1 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num1')] = $(this).val();

					if($(this).data('num1')==3) {
						params['data'+indexNum] = snum1;
						++indexNum;
					}
				} else if($(this).data('num2')) {
					if($(this).data('num2')==1) {
						snum2 = $(this).val();
					} else {
						snum2 = snum2 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num2')] = $(this).val();

					if($(this).data('num2')==3) {
						params['data'+indexNum] = snum2;
						++indexNum;
					}
				} else if($(this).data('num3')) {
					if($(this).data('num3')==1) {
						snum3 = $(this).val();
					} else {
						snum3 = snum3 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num3')] = $(this).val();

					if($(this).data('num3')==3) {
						params['data'+indexNum] = snum3;
						++indexNum;
					}
				} else if($(this).data('num4')) {
					if($(this).data('num4')==1) {
						snum4 = $(this).val();
					} else {
						snum4 = snum4 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num4')] = $(this).val();

					if($(this).data('num4')==3) {
						params['data'+indexNum] = snum4;
						++indexNum;
					}
				} else if($(this).data('num5')) {
					if($(this).data('num5')==1) {
						snum5 = $(this).val();
					} else {
						snum5 = snum5 + '|' + $(this).val();
					}

					// 두번째 폼을 위해
					params['data'+indexNum+'-'+$(this).data('num5')] = $(this).val();

					if($(this).data('num5')==2) {
						params['data'+indexNum] = snum5;
						++indexNum;
					}
				} else {
					if($(this).attr('name')=='gender_'+sNum) {
						if ($('input:radio[name=gender_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=gender_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='q1_'+sNum) {
						if ($('input:radio[name=q1_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=q1_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='q2_'+sNum) {
						if ($('input:radio[name=q2_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=q2_'+sNum+']:checked').val();
						}
					}

					else if($(this).attr('name')=='r1_'+sNum) {
						if ($('input:radio[name=r1_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=r1_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='r2_'+sNum) {
						if ($('input:radio[name=r2_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=r2_'+sNum+']:checked').val();
						}
					}
					else if($(this).attr('name')=='r3_'+sNum) {
						if ($('input:radio[name=r3_'+sNum+']').is(':checked')){
							params['data'+indexNum] = $('input:radio[name=r3_'+sNum+']:checked').val();
						}
					}

					else if($(this).attr('name')=='c1_'+sNum) {
						if ($('input:checkbox[name=c1_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=c1_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						}
					}
					else if($(this).attr('name')=='c2_'+sNum) {
						if ($('input:checkbox[name=c2_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=c2_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						}
					}
					else if($(this).attr('name')=='c3_'+sNum) {
						if ($('input:checkbox[name=c3_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=c3_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						}
					}
					else if($(this).attr('name')=='agree10_'+sNum) {
						if ($('input:checkbox[name=agree10_'+sNum+']').is(':checked')){
							var value = '';
							$('input:checkbox[name=agree10_'+sNum+']:checked').each(function(){
								if(!value) value = $(this).val();
								else value = value + ',' +$(this).val();
							});
							params['data'+indexNum] = value;
						} else {
							params['data'+indexNum] = 'N';
						}
					}
					else {
						params['data'+indexNum] = $(this).val();
					}
					++indexNum;
				}
			});


			// 171208 클레임으로 전화번호 차단 - 임시
			if($('#tel1_'+sNum).val()+"-"+$('#tel2_'+sNum).val()+"-"+$('#tel2_'+sNum).val() == '010-2440-9800') {
				alert("신청이 정상 처리되었습니다.");
				return false;
			}

			// form 생성
			// var form = document.createElement('form'+sNum);
			// form.setAttribute("id", 'dbform'+sNum);

			for(var key in params) {
				var hiddenField = document.createElement('input');
				hiddenField.setAttribute('type', 'hidden');
				hiddenField.setAttribute('id', key);
				hiddenField.setAttribute('name', key);
				hiddenField.setAttribute('value', params[key]);
				$('#frm').append(hiddenField);
			}
			// document.body.appendChild(form);

			// 두번째 form
			if($('#frm2').length) {
				/*var params2 = {};
				var form2 = document.createElement('frm2');
				form2.setAttribute("accept-charset", "euc-kr");
				form2.setAttribute("onsubmit", "document.charset='euc-kr';");
				form2.setAttribute("method", "POST");
				params2['type'] = '026';*/
				var vname = '';
				for(var key2 in $('#frm2').data()) {
					vname = $('#frm2').data(key2);
					// params2[$('#frm2').data(key2)] = Base64.decode($('#'+key2).val());
					$('#frm2 #'+vname).val( $('#'+key2).val() );
				}
				/*for(var key in params2) {
					var hiddenField = document.createElement('input');
					hiddenField.setAttribute('type', 'hidden');
					hiddenField.setAttribute('id', key);
					hiddenField.setAttribute('name', key);
					hiddenField.setAttribute('value', params2[key]);
					form2.appendChild(hiddenField);
				}
				document.body.appendChild(form2);*/
			}

			// 베스트인베스먼트
			if($('#best000').length) {
				var vname = '';
				for(var key2 in $('#best').data()) {
					vname = $('#best').data(key2);
					// params2[$('#best').data(key2)] = Base64.decode($('#'+key2).val());
					$('#best #'+vname).val( $('#'+key2).val() );
				}
			}
			if($('#besth000').length) {
				var vname = '';
				for(var key2 in $('#besth').data()) {
					vname = $('#besth').data(key2);
					// params2[$('#besth').data(key2)] = Base64.decode($('#'+key2).val());
					$('#besth #'+vname).val( $('#'+key2).val() );
				}
			}

			// monsterstock
			if($('#ofrm').length) {
				$("#ofrm").find("#g_name").val($('#name_'+sNum).val());
				$("#ofrm").find("#g_tel").val($('#tel1_'+sNum).val()+"-"+$('#tel2_'+sNum).val()+"-"+$('#tel2_'+sNum).val());
				$("#ofrm").find("#g_usr_ip").val(ip());//아이피정보
				$("#ofrm").find("#g_usr_agent").val(navigator.userAgent);//접속정보
				$("#ofrm").find("#neo_ref").val(document.referrer);//레퍼러
				$("#ofrm").find("#returnSite").val(location.href);//리턴주소
			}

			// 24mall
			if($('#frm24').length) {
				$("#frm24").find("#move_kind").val($('#s1_1 option:selected').val());
				$("#frm24").find("#car_ton").val($('#s2_1 option:selected').val());
				$("#frm24").find("#move_date").val($('#move_date_1').val());
				$("#frm24").find("#name").val($('#name_1').val());
				$("#frm24").find("#cell1").val($('#tel1_1 option:selected').val());
				$("#frm24").find("#cell2").val($('#tel2_1').val());
				$("#frm24").find("#cell3").val($('#tel3_1').val());
				var addr1 = $('#s5_1 option:selected').val();
				var addr1_1 = addr1.split('/');
				var addr1_2 = addr1_1['1'].split('-');
				$("#frm24").find("#str_addr1").val($('#s3_1 option:selected').val()+' '+$('#s4_1 option:selected').val());
				$("#frm24").find("#str_addr2").val(addr1_1['0']);
				$("#frm24").find("#str_post1").val(addr1_2['0']);
				$("#frm24").find("#str_post2").val(addr1_2['1']);
				$("#frm24").find("#str_info1").val($('#s6_1 option:selected').val());
				$("#frm24").find("#str_info2").val('');
				$("#frm24").find("#str_info3").val($('#s7_1 option:selected').val());

				var addr2 = $('#s10_1 option:selected').val();
				var addr2_1 = addr2.split('/');
				var addr2_2 = addr2_1['1'].split('-');
				$("#frm24").find("#end_addr1").val($('#s8_1 option:selected').val()+' '+$('#s9_1 option:selected').val());
				$("#frm24").find("#end_addr2").val(addr2_1['0']);
				$("#frm24").find("#end_post1").val(addr2_2['0']);
				$("#frm24").find("#end_post2").val(addr2_2['1']);
				$("#frm24").find("#end_info1").val($('#s11_1 option:selected').val());
				$("#frm24").find("#end_info2").val('');
				$("#frm24").find("#end_info3").val($('#s12_1 option:selected').val());

				$("#frm24").find("#safe_date").val($('#safe_date_1').val());
			}

			// belo01, loma01, belo02
			if($('#frmbelo').length) {
				$("#frmbelo").find("#hp_no").val($('#tel1_1 option:selected').val()+$('#tel2_1').val()+$('#tel3_1').val());
			}

			// cheon01
			if($('#frmcheon').length) {
				$("#frmcheon").find("#name").val($('#name_1').val());
				$("#frmcheon").find("#hp").val($('#tel1_1 option:selected').val()+$('#tel2_1').val()+$('#tel3_1').val());
				$("#frmcheon").find("#age").val($('#age_1').val());
				$("#frmcheon").find("#gender").val($("input[name='gender_1']:checked").val());
				$("#frmcheon").find("#memo").val('');
			}

			// seoul
			if($('#frmSeoul').length) {
				$("#frmSeoul").find("#uname").val($('#name_1').val());
				$("#frmSeoul").find("#tel1").val($('#tel1_1 option:selected').val()+$('#tel2_1').val()+$('#tel3_1').val());
			}

			// mizcare
			if($('#frmMizcare').length) {
				$("#frmMizcare").find("#name").val($('#name_1').val());
				$("#frmMizcare").find("#age").val($('#age_1').val());
				$("#frmMizcare").find("#phone1").val($('#tel1_1 option:selected').val());
				$("#frmMizcare").find("#phone2").val($('#tel2_1').val());
				$("#frmMizcare").find("#phone3").val($('#tel3_1').val());
				$("#frmMizcare").find("#memo").val($('#memo_1').val());
			}

			// frmboli
			if($('#frmboli').length) {
				$("#frmboli").find("#name").val($('#name_1').val());
				$("#frmboli").find("#age").val($('#age_1').val());
				$("#frmboli").find("#phone1").val($('#tel1_1 option:selected').val());
				$("#frmboli").find("#phone2").val($('#tel2_1').val());
				$("#frmboli").find("#phone3").val($('#tel3_1').val());
				$("#frmboli").find("#memo").val($('input:radio[name=r1_'+sNum+']:checked').val()+'|'+$('input:radio[name=r2_'+sNum+']:checked').val());
			}

			// lottowa
			if($('#frmLottowa').length) {
				$("#frmLottowa").find("#iname").val(Base64.encode($('#name_1').val()));
				$("#frmLottowa").find("#cellular1").val($('#tel1_1 option:selected').val());
				$("#frmLottowa").find("#cellular2").val($('#tel2_1').val());
				$("#frmLottowa").find("#cellular3").val($('#tel3_1').val());
			}

			// lottotong
			if($('#frmLottotong').length) {
				$("#frmLottotong").find("#userName").val(Base64.encode($('#name_1').val()));
				$("#frmLottotong").find("#hp1").val($('#tel1_1 option:selected').val());
				$("#frmLottotong").find("#hp2").val($('#tel2_1').val());
				$("#frmLottotong").find("#hp3").val($('#tel3_1').val());
			}

			// lottolead
			if($('#frmLottolead').length) {
				$("#frmLottolead").find("#iname").val(Base64.encode($('#name_1').val()));
				var tel = $('#tel_1').val();
				$("#frmLottolead").find("#cellular1").val(tel.substring(0,3));
				$("#frmLottolead").find("#cellular2").val(tel.substring(3,7));
				$("#frmLottolead").find("#cellular3").val(tel.substring(7,11));
			}

			// tbesti
			if($('#frmTbesti').length) {
				$("#frmTbesti").find("#name").val($('#name_1').val());
				$("#frmTbesti").find("#num").val($('#tel_1').val());
				// $("#frmTbesti").find("#num").val($('#tel1_1 option:selected').val()+$('#tel2_1').val()+$('#tel3_1').val());
			}

			// tbesti3
			if($('#frmTbesti3').length) {
				$("#frmTbesti3").find("#name").val($('#name_'+sNum).val());
				$("#frmTbesti3").find("#num").val($('#tel1_'+sNum+' option:selected').val()+$('#tel2_'+sNum).val()+$('#tel3_'+sNum).val());
			}

			// frmbaltuso
			if($('#frmbaltuso').length) {
				$("#frmbaltuso").find("#name").val($('#name_'+sNum).val());
				$("#frmbaltuso").find("#phone").val($('#tel1_'+sNum+' option:selected').val()+$('#tel2_'+sNum).val()+$('#tel3_'+sNum).val());
				$("#frmbaltuso").find("#marketingPrivacyAgreementYN").val($('#agree1_'+sNum).val());
				$("#frmbaltuso").find("#marketing3rdPartyTransferAgreementYN").val($('#agree5_'+sNum).val());
			}

			// frmlottosa
			if($('#frmlottosa').length) {
				$("#frmlottosa").find("#name").val($('#name_'+sNum).val());
				$("#frmlottosa").find("#PHONE").val($('#tel1_'+sNum+' option:selected').val()+$('#tel2_'+sNum).val()+$('#tel3_'+sNum).val());
			}

			// frmlnmk
			if($('#frmlnmk').length) {
				$("#frmlnmk").find("#wr_name").val($('#name_'+sNum).val());
				$("#frmlnmk").find("#wr_1").val($('#tel1_'+sNum+' option:selected').val());
				$("#frmlnmk").find("#wr_2").val($('#tel2_'+sNum).val());
				$("#frmlnmk").find("#wr_3").val($('#tel3_'+sNum).val());
				// $("#frmlnmk").find("#wr_content").val($('#money_'+sNum).val()+'만원');
			}
			if($('#frmlnmk2').length) {
				$("#frmlnmk2").find("#wr_name").val($('#name_'+sNum).val());
				var tel = $('#tel_'+sNum).val();
				$("#frmlnmk2").find("#wr_1").val(tel.substring(0,3));
				$("#frmlnmk2").find("#wr_2").val(tel.substring(3,7));
				$("#frmlnmk2").find("#wr_3").val(tel.substring(7,11));
				// $("#frmlnmk").find("#wr_content").val($('#money_'+sNum).val()+'만원');
			}

			// frmhope
			if($('#frmhope').length) {
				$("#frmhope").find("#name").val($('#name_'+sNum).val());
				$("#frmhope").find("#telnum2_1").val($('#tel1_'+sNum+' option:selected').val());
				$("#frmhope").find("#telnum2_2").val($('#tel2_'+sNum).val());
				$("#frmhope").find("#telnum2_3").val($('#tel3_'+sNum).val());
				$("#frmhope").find("#order_info").val($('#money_'+sNum).val()+'만원');
			}

			// frmlotto01
			if($('#frmlotto01').length) {
				$("#frmlotto01").find("#phone_num").val($('#tel1_'+sNum+' option:selected').val()+'-'+$('#tel2_'+sNum).val()+'-'+$('#tel3_'+sNum).val());
			}

			// frmhoguanwon
			if($('#frmhoguanwon').length) {
				$("#frmhoguanwon").find("#name").val($('#name_'+sNum).val());
				if(sNum == 3) {
					$("#frmhoguanwon").find("#phone").val($('#tel_'+sNum).val());
				} else {
					$("#frmhoguanwon").find("#phone").val($('#tel1_'+sNum+' option:selected').val()+'-'+$('#tel2_'+sNum).val()+'-'+$('#tel3_'+sNum).val());
				}
				$("#frmhoguanwon").find("#age").val($('#age_'+sNum).val());
				$("#frmhoguanwon").find("#memo").val($('#memo_'+sNum).val());
			}

			// var l_rndom=new Date().getTime();

			$.ajax({
				type:'POST',
				async:false,
				cache:false,
				dataType:"json",
				data: $('#frm').serialize(),
				// url : "http://admin.ad4989.co.kr/common/report/api/put_cpadata.jsp"+"?r="+l_rndom,
				url : "cpa",
				// jsonp : "callback",
				success : function(sData)
				{
					if(sData.success==true)
					{
						if($('#frm2').length) {
							var oForm = document.frm2;
							oForm.target="_self";
							oForm.submit();
						}

						// 한국주식증권방송
						if($('#frmKoreast').length) {
							location.href = 'http://www.한국주식증권방송.com/';
						}

						// frmbaltuso
						if($('#frmbaltuso').length) {
							var dbName = $('#name').val();
							var dbTel = $('#phone').val();
							var dbAgree1 = $('#marketingPrivacyAgreementYN').val();
							var dbAgree2 = $('#marketingInfoAgreementYN').val();
							var dbAgree3 = $('#marketing3rdPartyTransferAgreementYN').val();
							$.post('http://baltuso.com:8090/add', {
								vname: 'add_customer_from_ad',
								token: {
									service: "baltuso",
									id: "support@fabot.ai",
									token: "000000"
								},
								list: [{
									name: dbName, //이름
									phone: dbTel, //전화번호
									funnel: "EDL", //페이지명칭
									marketingPrivacyAgreementYN: dbAgree1,
									marketingInfoAgreementYN: dbAgree2,
									marketing3rdPartyTransferAgreementYN: dbAgree3
								}]
							}, function (res) {
								console.log(res);
							});
						}

						// 베스트인베스먼트
						if($('#best000').length) {
							var dbName = $('#dbName').val();
							var dbTel = $('#dbTel').val();
							var dbQues1 = $('#dbQues1').val();
							var dbQues2 = $('#dbQues2').val();
							var send_data = {"customer":{"list":[{"name":dbName,"phone":dbTel,"kind":dbQues1,"amount":dbQues2}]}} ;
							var jsonData = JSON.stringify(send_data);
							$.ajax({
								type:'POST',
								async:false,
								cache:false,
								dataType:"jsonp",
								data: jsonData,
								url : "http://www.pickupthephone.co.kr/customer/recv_data.php",
								jsonpCallback : "callback",
								success : function(rtn)
								{
									// console.log(rtn) ;
								},
								error:function(request,status,error)
								{
									console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
								}
							});
						}
						if($('#besth000').length) {
							var dbName = $('#dbName').val();
							var dbTel = $('#dbTel').val();
							var dbQues1 = $('#dbQues1').val();
							var dbQues2 = $('#dbQues2').val();
							var send_data = {"customer":{"list":[{"name":dbName,"phone":dbTel,"kind":dbQues1,"amount":dbQues2}]}} ;
							var jsonData = JSON.stringify(send_data);
							$.ajax({
								type:'POST',
								async:false,
								cache:false,
								dataType:"jsonp",
								data: jsonData,
								url : "http://pickupthephone.co.kr/customer/recv_data9.php",
								jsonpCallback : "callback",
								success : function(rtn)
								{
									// console.log(rtn) ;
								},
								error:function(request,status,error)
								{
									console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
								}
							});
						}

						if($('#ofrm').length) {
							var oForm = document.ofrm;
							oForm.target="_self";
							oForm.submit();
						}

						if($('#frm24').length) {
							// var oForm = document.frm24;
							// oForm.target="_self";
							// oForm.submit();
							$.ajax({
								type:'POST',
								async:false,
								cache:false,
								dataType:"jsonp",
								jsonp: "jquerycallback",
								data: $('#frm24').serialize(),
								url : "http://www.2424.net/opm24/move_submitall_ed.php",
								// url : "http://land1.ad4989.or.kr/t.php",
								success : function(sData)
								{
									// console.log(sData);
									if(sData.state=='ok')
									{
										// console.log('ok');
									}
									else
									{
										// console.log('fasle');
									}
								},
								error:function(request,status,error)
								{
									// console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error+"\n"+"status:"+status);
								}
							});
						}

						// belo01, loma01, belo02
						if($('#frmbelo').length) {
							var oForm = document.frmbelo;
							oForm.target="frmbeloiframe";
							oForm.submit();
						}

						// cheon01
						if($('#frmcheon').length) {
							var oForm = document.frmcheon;
							oForm.target="frmiframe";
							oForm.submit();
						}

						// mizcare
						if($('#frmMizcare').length) {
							var oForm = document.frmMizcare;
							oForm.target="frmiframe";
							oForm.submit();
						}

						// frmboli
						if($('#frmboli').length) {
							var oForm = document.frmboli;
							oForm.target="frmiframe";
							oForm.submit();
						}

						// lottowa
						if($('#frmLottowa').length) {
							var oForm = document.frmLottowa;
							oForm.target="_self";
							oForm.submit();
							// location.href = 'http://lottowa.net/Premium/premium_prism.htm';
						}

						// lottotong
						if($('#frmLottotong').length) {
							var oForm = document.frmLottotong;
							oForm.target="frmiframe";
							oForm.submit();
						}

						// lottolead
						if($('#frmLottolead').length) {
							var oForm = document.frmLottolead;
							oForm.target="_self";
							oForm.submit();
							// location.href = 'http://lottolead.co.kr/vip/vip_about.htm';
						}

						// tbesti
						if($('#frmTbesti').length) {
							var oForm = document.frmTbesti;
							oForm.target="frmiframe";
							oForm.submit();
						}

						// tbesti3
						if($('#frmTbesti3').length) {
							var oForm = document.frmTbesti3;
							oForm.target="frmiframe";
							oForm.submit();
						}

						// frmlottosa
						if($('#frmlottosa').length) {
							var oForm = document.frmlottosa;
							oForm.target="frmiframe";
							oForm.submit();
						}

						// seoul
						if($('#frmSeoul').length) {
							$.ajax({
								type:'POST',
								async:false,
								cache:false,
								dataType:"jsonp",
								jsonp: "callback",
								data: $('#frmSeoul').serialize(),
								url : "http://admin.seoultopinvest.com/db.jsp"+"?CrmType=8",
								// url : "http://land1.ad4989.or.kr/t.php",
								success : function(sData)
								{
									// console.log(sData);
									if(sData.state=='ok')
									{
										// console.log('ok');
									}
									else
									{
										// console.log('fasle');
									}
								},
								error:function(request,status,error)
								{
									// console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error+"\n"+"status:"+status);
								}
							});
						}

						if($('#frmMizcare').length) {
						} else {
							alert(sData.msg);
						}

						// lnmk
						if($('#frmlnmk').length) {
							var oForm = document.frmlnmk;
							oForm.target="frmiframe";
							oForm.submit();
						}
						if($('#frmlnmk2').length) {
							var oForm = document.frmlnmk2;
							oForm.target="frmiframe";
							oForm.submit();
						}

						// frmhope
						if($('#frmhope').length) {
							var oForm = document.frmhope;
							oForm.target="frmiframe";
							oForm.submit();
						}

						// frmlotto01
						if($('#frmlotto01').length) {
							var oForm = document.frmlotto01;
							oForm.target="frmiframe";
							oForm.submit();
						}

						// frmhoguanwon
						if($('#frmhoguanwon').length) {
							var oForm = document.frmhoguanwon;
							oForm.target="frmiframe";
							oForm.submit();
						}

					}
					else
					{
						alert(sData.msg);
						bSend_ing = false;
					}
				},
				error:function(request,status,error)
				{
					alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				}
			});
		};

		function numCheck() {
			onlyNumber("tel_1");
			onlyNumber("tel_2");
			onlyNumber("tel_3");
			onlyNumber("tel_4");
			onlyNumber("tel_5");
			onlyNumber("tel1_1");
			onlyNumber("tel2_1");
			onlyNumber("tel3_1");
			onlyNumber("tel1_2");
			onlyNumber("tel2_2");
			onlyNumber("tel3_2");
			onlyNumber("tel1_3");
			onlyNumber("tel2_3");
			onlyNumber("tel3_3");
			onlyNumber("tel1_4");
			onlyNumber("tel2_4");
			onlyNumber("tel3_4");
			onlyNumber("tel1_5");
			onlyNumber("tel2_5");
			onlyNumber("tel3_5");

			onlyNumber("age_1");
			onlyNumber("age_2");
			onlyNumber("age_3");
			onlyNumber("age_4");
			onlyNumber("age_5");

			onlyNumber("height_1");
			onlyNumber("height_2");
			onlyNumber("height_3");
			onlyNumber("height_4");
			onlyNumber("height_5");

			onlyNumber("weight_1");
			onlyNumber("weight_2");
			onlyNumber("weight_3");
			onlyNumber("weight_4");
			onlyNumber("weight_5");
		}
	});
})(jQuery);

function fnMove(seq){
	seq = (typeof seq !== "undefined") ? seq : 'db_table';
	var offset = $("#" + seq).offset();
	$('html, body').animate({scrollTop : offset.top}, 400);
}
