function lpFrmSnd(){
	var lpForm = $("<form method='post' action='http://lotto-plus.co.kr/json/module_03.php' target='submitF'></form>");
	lpForm.appendTo("body");

	var lp_name = ""; 
	var lp_phone = ""; 

	if ($("[name=PHONE]").val() == undefined)
	{
		lp_phone = "00000000000";
	}else{
		lp_phone = $("[name=PHONE]").val().replace(/ /g, ''); 
	}

	var lp_mode_input = $("<input type='hidden' name='mode' value='ok'/>");
	var lp_cmpny_input = $("<input type='hidden' name='cmpny' value='bananainc'/>");
	var lp_PHONE_input = $("<input type='hidden' name='PHONE' value='" + lp_phone + "'/>");

	lpForm.empty();
	lpForm.append(lp_mode_input);
	lpForm.append(lp_cmpny_input);
	lpForm.append(lp_PHONE_input);

	lpForm.submit();

	location.reload();
}