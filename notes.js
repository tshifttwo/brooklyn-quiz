var

on ".nextquestion" click go to next page 
on answer 1 add 2 points to brooklynheights
			add 2 points to dumbo

select answers as chosen
at the end, add them up

classes for each questions
compile results

for each question, find me the answer with the class chosen, and then get the index of that answer, 

assign a data answer to each question

each neighborhood key in the answerneighborhood[key] += answer[key];


var neighborhood = {
		"williamsburg": 0, //properties
		"crownheights":0,
		"brooklynheights":0,
		"dumbo":0,
		"bushwick":0,
		"parkslope":0,
	}	




var user = {
	points:{
		"williamsburg": 0, //properties
		"crownheights":0,
		"brooklynheights":0,
		"dumbo":0,
		"bushwick":0,
		"parkslope":0,
	}	
};

/*arrays only have values*/

// do i really need "answers" array?


var questions = [
	{
		// "questiontext": "Which subway line do you need access to the most?",
		"answers":[
			{
				// "value":'<img src="Exports/123.png" alt="1-2-3" style="width:auto;height:50px;">',
				"points":{
					"brooklynheights":2,
					"dumbo":2,
				}

			}, 
			{
				"value":'<img src="Exports/ACE.png" alt="A-C-E" style="width:auto;height:50px;">',
				"points":{
					"crownheights":2,
					"dumbo":2,
				
			}, {}, {}, {}, {},

		]
		
	}, {

	}, {}, {}, {},
]

var questionindex = 0;
var currentquestion = questions[questionindex];

$(".nextquestion").on('click', '.answer', function() {
	var answerindex = $(this).data('answer-index');
	var currentanswer = currentquestion.answers[answerindex];

	var neighborhoods = Object.keys(currentanswer.points);
	neighborhoods.forEach(function(neighborhood) {
		user.points[neighborhood] = user.points[neighborhood] + currentanswer.points[neighborhood]; // user.points[neighborhood] += currentanswer.points[neighborhood];
	});
	questionindex++;
	currentquestion = questions[questionindex];
});