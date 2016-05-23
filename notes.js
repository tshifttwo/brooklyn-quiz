var user = {
	points:{
		"williamsburg": 0, //properties
		"crownheights":0,
		"brooklynheight":0,
		"dumbo":0,
		"bushwick":0,
		"parkslope":0,
	}	
};

/*arrays only have values*/

var questions = [
	{
		"questiontext": "Which subway line do you need access to the most?",
		"answers":[
			{
				"value":'<img src="Exports/123.png" alt="1-2-3" style="width:auto;height:50px;">',
				"points":{
					"crownheights":2,
					"dumbo":2,
				}

			}, {}, {}, {}, {}, {},

		]

		
	}, {}, {}, {}, {},
]

var questionindex = 0;
var currentquestion = questions[questionindex];

$(kjsdf).on('click', '.answer', function() {
	var answerindex = $(this).data('answer-index');
	var currentanswer = currentquestion.answers[answerindex];

	var neighborhoods = Object.keys(currentanswer.points);
	neighborhoods.forEach(function(neighborhood) {
		user.points[neighborhood] = user.points[neighborhood] + currentanswer.points[neighborhood]; // user.points[neighborhood] += currentanswer.points[neighborhood];
	});
	questionindex++;
	currentquestion = questions[questionindex];
});