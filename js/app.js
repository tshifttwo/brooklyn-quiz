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

var neighborhood = {
		"williamsburg": 0, //properties
		"crownheights":0,
		"brooklynheights":0,
		"dumbo":0,
		"bushwick":0,
		"parkslope":0,
	};

var questions = [
	{
		// "Q1: "Which subway line do you need access to the most?",
		"Q1":[
			{
				"crownheights":2,
				"dumbo":2,
			},
			{ //no 2
				"brooklynheights":2,
				"dumbo":2,
			},
			{//3
				"williamsburg":2,
				"bushwick":2,
			},
			{//4
				"brooklynheights":2,
				"parkslope":2,
			},
			{//5
				"williamsburg":2,
				"bushwick":2,
			},
			{//6
				"williamsburg":2,
				"crownheights":2,
			},
		],

		// Q2: "What kind of shopping do you want nearby?",
		"Q2":[
			{
				"williamsburg":1,
				"bushwick":1,
				"brooklynheights":1,
				"dumbo":1,
			},
			{ //no 2
				"williamsburg":1,
				"bushwick":2,
				"crownheights":1,
			},
			{//3
				"crownheights":1,
				"parkslope":1,
				"brooklynheights":1,
				"dumbo":1,
			},
			{//4
				"brooklynheights":2,
				"dumbo":1,
				"parkslope":1
			},
			{//5
				"williamsburg":1,
				"bushwick":1,
				"parkslope":1,
				"dumbo":1,
			},
			{//6
				"williamsburg":1,
				"crownheights":2,
				"parkslope":1,
			},
		],

		// Q3: "Which celebrity neighbor would you like to have?",
		"Q3":[
			{
				"brooklynheights":2,
			},
			{ //no 2
				"bushwick":2,
			},
			{//3
				"parkslope":2,
			},
			{//4
				"dumbo":2,
			},
			{//5
				"crownheights":2,
			},
			{//6
				"williamsburg":2,
			},
		],

		// Q4: "Which bar theme is your favorite?",
		"Q4":[
			{
				"williamsburg":2,
			},
			{ //no 2
				"dumbo":2,
			},
			{//3
				"brooklynheights":2,
			},
			{//4
				"parkslope":2,
			},
			{//5
				"crownheights":2,
			},
			{//6
				"bushwick":2,
			},
		],

		// Q5: "Which of these is important to you?",
		"Q5":[
			{
				"williamsburg":1,
				"dumbo":1,
				"brooklynheights":1,
				"parkslope":1,
			},
			{ //no 2
				"williamsburg":2,
				"bushwick":1,
				"crownheights":1
			},
			{//3
				"williamsburg":1,
				"brooklynheights":1,
				"dumbo":2,
			},
			{//4
				"bushwick":1,
				"crownheights":2,
				"parkslope":1,
			},
			{//5
				"dumbo":1,
				"brooklynheights":2,
				"parkslope":1,
			},
			{//6
				"bushwick":2,
				"crownheights":1,
				"parkslope":1, 
			},
		],
	}
]

	

});