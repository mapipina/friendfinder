// Dependencies
// =============================================================
let express = require('express');
let bodyParser = require('body-parser');
let path = require("path");

// Sets up Express
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // BFFs
// // =============================================================
// var besties = [
//   {
//   "name":"Mikey",
//   "photo":"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
//   },
//   {
//   "name":"Katie",
//   "photo":"https://pmcvariety.files.wordpress.com/2017/09/katie-holmes.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       3,
//       2,
//       2,
//       3,
//       3,
//       2
//     ]
//   },
//   {
//   "name":"Mario",
//   "photo":"https://pbs.twimg.com/media/DU6e3nUVMAEh-DL.png",
//   "scores":[
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5,
//       5
//     ]
//   }
// ];

// // Routes
// // =============================================================

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "survey.html"));
// });

// // Displays all characters
// app.get("/api/friends", function(req, res) {
//   return res.json(besties);
// });

// // Displays a single character, or returns false
// app.get("/api/characters/:character", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// // Create New Characters - takes in JSON input
// app.post("/api/characters", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var newcharacter = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
