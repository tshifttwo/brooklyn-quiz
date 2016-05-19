$(document).ready(function(){
	

	$('button').click(function(){
		$(".intropage").fadeOut(2000);
		$(".question1").fadeIn(2000);

	});

	$(".question1").click(function(){
		$(".question1").fadeOut(2000);
		$(".question2").fadeIn(2000);
	});

	$(".question2").click(function(){
		$(".question2").fadeOut(2000);
		$(".question3").fadeIn(2000);
	});

	$(".question3").click(function(){
		$(".question3").fadeOut(2000);
		$(".question4").fadeIn(2000);
	});

	$(".question4").click(function(){
		$(".question4").fadeOut(2000);
		$(".question5").fadeIn(2000);
	});

	$(".question5").click(function(){
		$(".question5").fadeOut(2000);
		$(".Williamsburgresult").fadeIn(2000);
	});

	$(".Williamsburgresult").click(function(){
		$(".Williamsburgresult").fadeOut(2000);
		$(".CHeightsresult").fadeIn(2000);
	});

	$(".CHeightsresult").click(function(){
		$(".CHeightsresult").fadeOut(2000);
		$(".dumboresult").fadeIn(2000);
	});

	
	$(".dumboresult").click(function(){
		$(".dumboresult").fadeOut(2000);
		$(".parkslopeesult").fadeIn(2000);
	});

	$(".parkslopeesult").click(function(){
		$(".parkslopeesult").fadeOut(2000);
		$(".intropage").fadeIn(2000);
	});


});