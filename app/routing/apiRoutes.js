let friends = require('../data/friends');

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
	  res.send(friends);
	});

	app.post("/api/friends", function(req, res) {
	  //capture of the user input object
	  var userInput = req.body;
	  var userResponses = userInput.scores;
	  //best friend match portion
	  //set up best friend variables
	  var matchName = '';
	  var matchImage = '';
	  var totalDifference = 10000; 
	    // The difference between scores
	      for (var i = 0; i < friends.length; i++){
	          var diff = 0;
	          for (var j = 0; j < userResponses.length; j++){
	            diff += Math.abs(friends[i].scores[j] - userResponses[j]);
	          }
	          
	        if (diff < totalDifference) {
	          totalDifference = diff
	          matchName = friends[i].name;
	          matchImage = friends[i].photo;
	        }
	      }  
		friends.push(userInput);

	  //push corresponding friend match
	  res.json({status: 'OK', matchName: matchName, matchImage: matchImage});


	});

}

