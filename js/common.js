$(document).ready(function() {

	let mobileMenu = $('.s1_ul2');
 	let header,
	 scrollPrev = 0;

	if(document.documentElement.clientWidth > 751) header = $('#header');
	else{
		header = $('.s1');
	}

	$(window).scroll(function() {
		let scrolled = $(window).scrollTop();
		if(scrolled>200) {
			console.log(document.documentElement.clientWidth)
			if(document.documentElement.clientWidth <= 751) mobileMenu.slideUp();
			header.addClass('fixed');

		}
		else{
				header.removeClass('fixed');
			}
		if ( scrolled > 200 && scrolled > scrollPrev ) {
			header.addClass('out');
		} else {
			header.removeClass('out');
		}

		scrollPrev = scrolled;
	});

	$(window).resize(function() {
		if(header.hasClass('fixed')) header.removeClass('fixed');
		if(header.hasClass('out')) header.removeClass('out');
		if(document.documentElement.clientWidth > 751){
			header = $('#header');
		}
		else{
			header = $('.s1');
		}
	})



$(".modal_bg").click(function(){

	$(".modal_form").fadeOut();
	$(".modal_form2").fadeOut();
	$(".modal_bg").fadeOut();

});


$(".mod_close").click(function(){

	$(".modal_bg").fadeOut();
	$(".modal_form").fadeOut();
	$(".modal_form2").fadeOut();

});




	$(document).click(function(e){
		if(!e.target.closest('.s1_ul2') && !e.target.classList.contains('mnu_small') && !e.target.classList.contains('burger_item') && document.documentElement.clientWidth <769){
			mobileMenu.slideUp();
		}
	})

$(".mnu_small").click(function(){

	mobileMenu.slideToggle();

});

$('._mPS2id-h').click(function (){
	if(document.documentElement.clientWidth <769)
	mobileMenu.slideUp();
})








 let from = "";


$(".s1_btn1").click(function(){

	from = "Заказать звонок";

});




$(".s7_btn1").click(function(){

	from = "Получить демо-доступ";

});


$(".s11_btn1").click(function(){

	from = "Стать автором";

});


$(".s1_btn1").click(function(){

	$(".modal_bg").fadeIn();
	$(".modal_form").fadeIn();

});


	$(".mnu_small_green").click(function(){
		from="Заказать звонок";
		$(".modal_bg").fadeIn();
		$(".modal_form").fadeIn();

	});


$(".s7_btn1").click(function(){

	$(".modal_bg").fadeIn();
	$(".modal_form").fadeIn();

});


$(".s11_btn1").click(function(){

	$(".modal_bg").fadeIn();
	$(".modal_form").fadeIn();

});

/*$(".").click(function(){



});*/



function SendMail(form, formNum){
		let msg = form.serialize();
		let msgOut= msg + "&from=" +from + "&formNum=" +formNum;

		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: msgOut
		}).done(function() {
			$('.modal_form').fadeOut();
			$('.modal_form2').fadeIn();
			setTimeout(function() {
				document.location.replace("index.html");
			}, 2000);
		});
		return false;

}


$(".s1_ul2 a").mPageScroll2id();


$(".mod_btn").click(function(){

	let name = $("#in1").val();
	let phone = $("#in2").val();
	let err = 0;

	if(name === ""){
		$("#in1").css("border", "1px solid red");
		err = 1;
	}

	if(phone === ""){
		$("#in2").css("border", "1px solid red");
		err = 1;
	}

	if(!err){
		SendMail($('.modal_form'), '1');

	}

});





$(".s2_btn1").click(function(){

	let phone = $("#in3").val();
	from = "Получить демо-доступ";
	let err = 0;

	if(phone === ""){
		$("#in3").css("border", "1px solid red");
		err = 1;
	}

	if(!err){
		SendMail($('.s2_ul'), '2');

	}

});





$(".form3_button").click(function(){

	let name = $("#in5").val();
	let phone = $("#in6").val();
	from = "Узнать стоимость";
	let err = 0;


	if(name === ""){
		$("#in5").css("border", "1px solid red");
		err = 1;
	}

	if(phone === ""){
		$("#in6").css("border", "1px solid red");
		err = 1;
	}

	if(!err){
		SendMail($('.form3'), '3');
	}

});


$(".form4_btn").click(function(){

	let name = $("#in7").val();
	let phone = $("#in8").val();
	from = "Узнать стоимость";
	let err = 0;


	if(name === ""){
		$("#in7").css("border", "1px solid red");
		err = 1;
	}

	if(phone === ""){
		$("#in8").css("border", "1px solid red");
		err = 1;
	}

	if(!err){
		SendMail($('.form4'), '4');

	}

});



$(".form5_btn").click(function(){

	let name = $("#in9").val();
	let phone = $("#in10").val();
	from = "Узнать стоимость";
	let err = 0;


	if(name === ""){
		$("#in9").css("border", "1px solid red");
		err = 1;
	}

	if(phone === ""){
		$("#in10").css("border", "1px solid red");
		err = 1;
	}

	if(!err){
		SendMail($('.form5'), '5');
	}

});





$("#in2").mask("+7(999) 999-9999");
$("#in3").mask("+7(999) 999-9999");
$("#in6").mask("+7(999) 999-9999");
$("#in8").mask("+7(999) 999-9999");
$("#in10").mask("+7(999) 999-9999");






});


