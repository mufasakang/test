$(function(){

	$('#load').addClass("on");
    $('#popup').addClass('pop');
//--------------------날짜---------------

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10) {
		dd='0'+dd;
	} 
	if(mm<10) {
		mm='0'+mm;
	} 
	today = yyyy+'/' + mm+'/'+dd;

	var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
	$('#calendar>span').text(st_date);

//--------------------------------------------
	
//--------------------순위목록 이동--------------
	 var swiper = new Swiper('.swiper-container', {
     	direction: 'vertical',
		 spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }, 
     	
    });

	

	
	
//--------------------팝업창 끄기----------------
	
	
	$('#popup_head>p').click(function(){
		$('#popup').hide();
		$('#load').hide();
		$('#load').removeClass("on");
		$('#popup').removeClass('pop2');
	});
	
//------------------------------------------------

//--------------------팝업창 켜기------------------
	$('#for_search>img').click(function(){
		
		$('#load').addClass("on");
		$('#popup').addClass('pop');
		$('#load').show();
		$('#popup').show();
		
	});
	
	$('.main_box>img').click(function(){
		$('#popup').removeClass('pop');
		$('#popup').addClass('pop2');
		$('#popup').show();
	});
	
	
/*자바스크립트 미디어쿼리 분기 시작*/	
	
	/*모바일 550픽셀 이하 화면*/
	enquire.register('screen and (max-width:550px)', {
        match : function () { 

        	
        	
        	
      
       }/*match : function () 블록끝*/
		
	
	/*모바일 551~767 픽셀 화면*/
	 }).register('screen and (min-width:551px) and (max-width: 767px)', {
         
	    match : function () {

	    	
	    	
        }/*match : function () 블록끝*/
	 
	 /*모바일,탭,PC 768 픽셀 이상 화면*/
	 }).register('screen and (min-width: 768px)', {
         
		    match : function () {

		    	
		    	
		    	
		    	
	        }/*match : function () 블록끝*/
	 
	 
	 
	 /*모바일 551~991 픽셀 화면*/
	 }).register('screen and (min-width:551px) and (max-width: 991px)', {
         
	    match : function () {

	  
	    	
	    	
	    	
        }/*match : function () 블록끝*/
	 
	 
	 
	 
	 
	 
	 
	 /*모바일 991픽셀 이하 화면*/
	 }).register('screen and (max-width: 991px)', {
         
		    match : function () {
		    	
		    	
		    	
		    	
		    }/*match : function () 블록끝*/
	 
	 /*PC 992 픽셀 이상 화면*/
	 }).register('screen and (min-width: 992px)', {
         
		    match : function () {
		    	
		    	
		    	
		    	
		    }/*match : function () 블록끝*/
	 
	 
	 /*모바일, 탭 1200 픽셀 미만 화면*/
	 }).register('screen and (max-width: 1199px)', {
         
		    match : function () {
		    	
		    	
		    	
		    
		    	
		    	
		    }/*match : function () 블록끝*/
	 
	 
	 
	 
	 /*PC 1200 픽셀 이상 화면*/
	 }).register('screen and (min-width: 1200px)', {
         
		    match : function () {
		    	
		    	
		    	
		    }/*match : function () 블록끝*/
	 
	
	 
	 
     
	 }, true).listen(8);
	
	
	
	

});