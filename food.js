var fs = require('fs');
var net = require('net');
var server = net.createServer();
var savedData = fs.readFileSync('./info.json', 'utf8');
var masterArray = JSON.parse(savedData);


server.on('connection', function(client) {
	client.write('client connected \n');
	client.setEncoding('utf8');

	client.write('Welcome user! \nTo create a new food entry, use the command "create". To see all of your food entries, use the command "view".\n');

	client.write('If creating new food entry, provide the following information: name, snack, meal, drink.\n');

	client.on('data', function(stringFromClient){

		var input = stringFromClient.trim();
		var splitInput = input.split(' ');
		var command = splitInput[0];

		if (command === "create"){
			
			var newUser = splitInput[1];
			var newSnack = splitInput[2];
			var newMeal = splitInput[3];
			var newDrink = splitInput[4];

			var foodEntry = {
					name: newUser,
					// date: entryDate,
					snack: newSnack,
					meal: newMeal,
					drink: newDrink,
				};

			masterArray.push(foodEntry);

			var arrayIntoString = JSON.stringify(masterArray);
			fs.writeFileSync('./info.json', arrayIntoString);

			client.write('New food entry successfully added!\n');
		
			
		} else if (command === "view"){
			masterArray.forEach(function(person){
				client.write(person.name + " " + person.snack + " " + person.meal + " " + person.drink + "\n")
			})
		}
	});
});

server.listen(8124, function() { 
  console.log('connected');
}); 




// ////

// 	}

// client.on('data', function(stringFromClient) {
// 	var input = stringFromClient.trim();
// 	var splitInput = input.split(' ');
// 	console.log(splitInput);

// 	var userName = splitInput[0].toString();
// 	// var command = splitInput[1].toString();
// 	// var entryDate = splitInput[2].toString();
// 	var newSnack = splitInput[1].toString();
// 	var newMeal = splitInput[2].toString();
// 	var newDrink = splitInput[3].toString();

// 	var dailyEntry = 
// 		{
// 			name: userName,
// 			date: entryDate,
// 			snack: newSnack,
// 			meal: newMeal,
// 			drink: newDrink,
// 		};

// 	//masterArray.forEach(function(person) userName){
	

// 	var dataInfo = JSON.parse(fs.readFileSync(savedData, 'utf8'));

// 	client.write("If you wish to create a new entry, type 'create'. If you would like to see your current entries, type 'view'. \n");
// 	if (command === "create"){
// 		client.write("Please type in the followin information 'entry date' snack' 'meal' 'drink'. \n");
// 		if (newDrink === undefined){
// 			client.write("Uh oh, don't forget to add all of your info! Please give the 'entry date' snack' 'meal' 'drink' \n");
// 		}else{
// 			dailyEntry.name = userName;
// 			dailyEntry.date = entryDate;
// 			dailyEntry.snack = newSnack;
// 			dailyEntry.meal = newMeal;
// 			dailyEntry.drink = newDrink;

// 			masterArray.push(dailyEntry);
// 		  	save(masterArray);
// 		  	client.write("New entry created! \n")
// 		}
// 	} else if (command === "view"){
// 		if (masterArray.length > 0){
// 			client.write('Here are your entries:');
// 			masterArray.forEach(function(userName){
// 				client.write(dailyEntry);
// 			});
// 		}else if (masterArray.length = 0){
// 			client.write("No entries found. Dogs must have eaten them.");
// 		}
// 	} else {
// 		client.write("Nice try Booboo. Please use the following commands: 'create' 'view'")
// 	}
// //}

// });
// });

// server.listen(8124, function() { 
//   console.log('connected');
// }); 
