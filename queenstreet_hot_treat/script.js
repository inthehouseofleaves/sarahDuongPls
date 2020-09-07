const drinks = {
	coffee: [
		{
			title: 'Early Bird',
			price: '$$'
		},
		{	
			title: 'Dark Horse',
			price: '$'
		},
		{	
			title: 'Le Gourmand',
			price: '$'
		}
	],
	tea: [
		{
			title: 'David\'s Tea',
			price: '$$'
		},
		{
			title: 'Tealish',
			price: '$$'
		},
		{
			title: 'Teavana',
			price: '$'
		}
	]
};

// SHORT FORM DOCUMENT READY

// $(function(){
// 	//Our code goes in here
// });


// PSEUDO CODE: STEPS
// 1. Create an event listener for a "submit" event
// 2. Saving information from checked radio buttons into variables
// 3. Determine what the user's choices correspond to from our drinks object
// 4. If we still have more than one choice based on user's choices, then we will randomly select one coffee or tea spot
// 5. Display the coffee or tea place on the page! (display that item in the results section)


// LONG FORM DOCUMENT READY

$(document).ready(function(){

	// Declaring a function that will return a random item from any array
	function randomItem(array){


		// 6. If we still have more than one choice based on user's choices, then we will randomly select one coffee or tea spot
		// 3 items, indexes: 0, 1, 2
		// Use a random number generator to choose a random index number that will correspond to the item

		// 6a) Generate random number within the range of indexes in my array

		const randomIndex = Math.floor(Math.random() * array.length);
		// i) Math.round will generate a random number between 0 and 0.999999
		// Multiplying Math.round * array.length (ie. 3) will allow you to access numbers between 0 and 2.99999
		// ii) Use Math.floor because it will allow you to round down to the nearest whole number
		// Rounding DOWN because an array with 3 items will only have two indexes (0, 1, and 2)

		console.log(randomIndex);

		return array[randomIndex];
		// Array is the parameter
		// The same as if you were choosing array[0] except we are choosing a random number (ie. randomIndex)

	}


	// 1. Create an event listener for a "submit" event
	// Do this on your form!

	$("form").on("submit", function(event){

		// 2. Prevent default on your form!
		// You must pass this preventDefault() function as a parameter!
		// Call this parameter "event" or "e"

		event.preventDefault();
		console.log("Are we even submitting?");
		// Console.log will log out "are we even submitting" when you submit your form/press submit!

		// 3. Saving information from checked radio buttons into variables

		// a) What type of beverage (tea or coffee)

		const bevType = $("input[name=beverage]:checked").val();
		console.log(bevType);
		// input[name=beverage]:checked will search within your all inputs with the name of beverage that is checked
		// .val() will look to your HTML for a value="" and retrieve it
		// Console.logging this will return what you have picked to your console

		// b) Cost of beverage (cheap or expensive)

		const bevCost = $("input[name=price]:checked").val();
		console.log(bevCost);

		// 4. Determine what the user's choices correspond to from our drinks object (use the information that we've been given to whittle down this object)

		// a) Narrowing down coffee vs. tea places

		const bevPlaces = drinks[bevType]; 
		console.log(bevPlaces);
		// bevPlaces is now an array containing either coffee or tea places
		// const drinks = {tea: [], coffee: []}
		// cannot use dot notation bc dot notation is too literal
		// dot notation is great if you are looking for the EXACT NAME, NOTTTTT a variable!!!
		// do NOT use "" bc that will search for a STRING called bevType
		// use bevType with NO "" so that it will look for a variable!

		
		// 5.
		const finalPlaces = [];
		// You MUST declare your variable before you use it!

		
		// 4b) Narrowing down cheap vs. expensive
		// Create a for-loop with an if-statement inside!
		for (let i = 0; i < bevPlaces.length; i++) {
			// Let our loop run through each item on our array
			// This allows us to compare the prices in our array to the price the user has input
			// Check if the price matches the bevCost
			// starting our index at 0 (i is equal to a counter)
			// i < bevPlaces.length allows us to run our loop as many times as we have items (ie. 3 times)

			console.log(bevPlaces[i].price)
			// bevPlaces[0] if we wanna see the first item in our array
			// i allows us to see each item in our array
			// .price allows us to access a specific property of each object in our array

			const place = bevPlaces[i];
			// {title: "David tea something", price: "$"}
			// Place is now one of the objects in the coffee/tea array

			// c) Push the place you have chosen into your finalPlaces variable (outside of your for-loop)
			if (bevCost === place.price) {
				finalPlaces.push(place);
			}

		}

		// 7. CALL EVERYTHING

		console.log(finalPlaces);
		// ^ Whatever you named your const in your for-loop!

		const toDisplay = randomItem(finalPlaces)

		// 8. Display the coffee or tea place on the page! (display that item in the results section)

		$(".results").html(`<h2 class="choice">${toDisplay.title}</h2>`)

	});



});

// STRETCH GOALS
// Reset radio buttons/allow user to start again
// Error handling, ensure user has selected both before allowing them to submit

