var friends = require('../data/friends');

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
	  res.send(friends);
	});

	app.post("/api/friends", function(req, res) {
		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		console.log(req.body);

	var userInput = req.body;
	var userResponses = userInput.scores;

	var totalDifference = 0; 

	for (var i = 0; i < friends.length; i++) {
		console.log(friends[i].name);
		totalDifference = 0;

		for (var j = 0; j < friends[i].scores[j]; j++) {
			totalDifference += Math.abs(parseInt(userResponses[j]) - parseInt(friends[i].scores[j]));

			if (totalDifference <= bestMatch.friendDifference) {
				bestMatch.name = friends[i].name;
				bestMatch.photo = friends[i].photo;
				bestMatch.friendDifference = totalDifference;
			}
		}
	}

	 friends.push(userInput);
	 res.json(bestMatch);

	});

}

