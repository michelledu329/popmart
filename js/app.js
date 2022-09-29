$('#clear-all').click(function () {
	$(':radio').each(function () {
		$('input:checked').removeAttr('checked');
		$('input[type="radio"]').prop('checked', false);
	});
	$('.pri-50').addClass('current-point');
	$('.pri-25').removeClass('current-point');
	$('.pri-75').removeClass('current-point');
	$('.size-50').addClass('current-point');
	$('.size-25').removeClass('current-point');
	$('.size-75').removeClass('current-point');
	$('.range-num').css('left', "calc(50% - 50px)");
	$('.range-size').css('left', "calc(50% - 50px)");
	$('.range-num').text('$50 & Under');
	$('.range-size').text('400%');
});

$(document).on("click", "input[type='radio']", function(e) {
	var checked = $(this).attr("checked");
	if(!checked){
		$(this).attr("checked", true);
	} else {
		$(this).removeAttr("checked");
		$(this).prop("checked", false);
	}
});

// PRICE RANGE

$('.pri-25').click(function(){
	$('.pri-25').addClass('current-point');
	$('.pri-50').removeClass('current-point');
	$('.pri-75').removeClass('current-point');
	$('.range-num').css('left', "calc(25% - 50px)");
	$('.range-num').text("$25 & Under");
});

$('.pri-50').click(function(){
	$('.pri-50').addClass('current-point');
	$('.pri-25').removeClass('current-point');
	$('.pri-75').removeClass('current-point');
	$('.range-num').css('left', "calc(50% - 50px)");
	$('.range-num').text("$50 & Under");
});

$('.pri-75').click(function(){
	$('.pri-75').addClass('current-point');
	$('.pri-25').removeClass('current-point');
	$('.pri-50').removeClass('current-point');
	$('.range-num').css('left', "calc(75% - 50px)");
	$('.range-num').text("$75 & Under");
});

// FIGURE SIZE RANGE

$('.size-25').click(function(){
	$('.size-25').addClass('current-point');
	$('.size-50').removeClass('current-point');
	$('.size-75').removeClass('current-point');
	$('.range-size').css('left', "calc(25% - 50px)");
	$('.range-size').text("200%");
});

$('.size-50').click(function(){
	$('.size-50').addClass('current-point');
	$('.size-25').removeClass('current-point');
	$('.size-75').removeClass('current-point');
	$('.range-size').css('left', "calc(50% - 50px)");
	$('.range-size').text("400%");
});

$('.size-75').click(function(){
	$('.size-75').addClass('current-point');
	$('.size-25').removeClass('current-point');
	$('.size-50').removeClass('current-point');
	$('.range-size').css('left', "calc(75% - 50px)");
	$('.range-size').text("1000%");
});

// YEAR HISTORY
$('.y-09').click(function(){
	$('.y-09').addClass('current-year');
	$('.diff-doll').addClass('blur-overlay');
	$('.y-10').removeClass('current-year');
	$('.y-15').removeClass('current-year');
	$('.y-16').removeClass('current-year');
	$('.y-18').removeClass('current-year');
	$('.year-num').css('left', "calc(20% - 45px)");
	$('.year-num').text("Year 2009");

	$('.pic-text').css('display', 'grid');
	$('.pic-text>.year-ip').addClass('img-55');
	$('.pic-text>.year-ip').removeClass('img-60');
	$('.pic-text>.year-ip').removeClass('img-16');
	$('.pic-text>.year-ip').removeClass('img-29');
	$('.pic-text>.year-ip').removeClass('img-25');
	$('.pic-text>.year-ip').css('transition', 'all 0.3s ease');
	$('.his-text>span').text('2009');

});

$('.y-10').click(function(){
	$('.y-10').addClass('current-year');
	$('.diff-doll').addClass('blur-overlay');
	$('.y-09').removeClass('current-year');
	$('.y-15').removeClass('current-year');
	$('.y-16').removeClass('current-year');
	$('.y-18').removeClass('current-year');
	$('.year-num').css('left', "calc(30% + 5px)");
	$('.year-num').text("Year 2010");

	$('.pic-text').css('display', 'grid');
	$('.pic-text>.year-ip').addClass('img-60');
	$('.pic-text>.year-ip').removeClass('img-55');
	$('.pic-text>.year-ip').removeClass('img-16');
	$('.pic-text>.year-ip').removeClass('img-29');
	$('.pic-text>.year-ip').removeClass('img-25');
	$('.pic-text>.year-ip').css('transition', 'all 0.3s ease');
	$('.his-text>span').text('2010');
});

$('.y-15').click(function(){
	$('.y-15').addClass('current-year');
	$('.diff-doll').addClass('blur-overlay');
	$('.y-10').removeClass('current-year');
	$('.y-09').removeClass('current-year');
	$('.y-16').removeClass('current-year');
	$('.y-18').removeClass('current-year');
	$('.year-num').css('left', "calc(50% - 50px)");
	$('.year-num').text("Year 2015");

	$('.pic-text').css('display', 'grid');
	$('.pic-text>.year-ip').addClass('img-16');
	$('.pic-text>.year-ip').removeClass('img-60');
	$('.pic-text>.year-ip').removeClass('img-55');
	$('.pic-text>.year-ip').removeClass('img-29');
	$('.pic-text>.year-ip').removeClass('img-25');
	$('.pic-text>.year-ip').css('transition', 'all 0.3s ease');
	$('.his-text>span').text('2016');
});

$('.y-16').click(function(){
	$('.y-16').addClass('current-year');
	$('.diff-doll').addClass('blur-overlay');
	$('.y-10').removeClass('current-year');
	$('.y-15').removeClass('current-year');
	$('.y-09').removeClass('current-year');
	$('.y-18').removeClass('current-year');
	$('.year-num').css('left', "calc(60% - 5px)");
	$('.year-num').text("Year 2016");

	$('.pic-text').css('display', 'grid');
	$('.pic-text>.year-ip').addClass('img-29');
	$('.pic-text>.year-ip').removeClass('img-60');
	$('.pic-text>.year-ip').removeClass('img-16');
	$('.pic-text>.year-ip').removeClass('img-55');
	$('.pic-text>d.year-ipiv').removeClass('img-25');
	$('.pic-text>.year-ip').css('transition', 'all 0.3s ease');
	$('.his-text>span').text('2016');
});

$('.y-18').click(function(){
	$('.y-18').addClass('current-year');
	$('.diff-doll').addClass('blur-overlay');
	$('.y-10').removeClass('current-year');
	$('.y-15').removeClass('current-year');
	$('.y-16').removeClass('current-year');
	$('.y-09').removeClass('current-year');
	$('.year-num').css('left', "calc(75% - 10px)");
	$('.year-num').text("Year 2018");

	$('.pic-text').css('display', 'grid');
	$('.pic-text>.year-ip').addClass('img-25');
	$('.pic-text>.year-ip').removeClass('img-60');
	$('.pic-text>.year-ip').removeClass('img-16');
	$('.pic-text>.year-ip').removeClass('img-29');
	$('.pic-text>.year-ip').removeClass('img-55');
	$('.pic-text>.year-ip').css('transition', 'all 0.3s ease');
	$('.his-text>span').text('2018');
});


$(".feedback").click(function(){
	if($('.feedback-container').css('display') === 'none'){
		$('.feedback-container').css('display','block');
	}else{
		$('.feedback-container').css('display','none');
	}
});


