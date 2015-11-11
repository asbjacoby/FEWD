$(document).ready(function(){

	//First figure out what you need to store, what events you need to listen to, and how to react when those events happen
	var animals = ['animal1.jpg', 'animal2.jpg', 'animal3.jpg', 'animal4.jpg', 'animal5.jpg', 'animal6.jpg', 'animal7.jpg'];

	//Start at the first thing in the array?
	var i = 0;
	var lastIndexOfArray = animals.length - 1;

	//Events
	$('#next').click(goToNextAnimal);
	$('#back').click(goToPreviousAnimal);

	//Define functions/reactions
	function goToNextAnimal(){
		//This is how we know we're at the end of our array, it checks, we go back to the beginning.  
		if (i === animals.length - 1){
			i = 0;
		}
		else {
			i++;
		}
		//animal1
		
		//animal2...
		var nextAnimal = animals[i];
		//change the html attribute (green)
		$('#image-to-vote-on').attr('src', 'images/' + nextAnimal);

	}

	function goToPreviousAnimal(){
		if (i === 0){
			i = lastIndexOfArray;
		}
		else {
			i--;
		}
		
		var previousAnimal = animals[i];
		$('#image-to-vote-on').attr('src', 'images/' + previousAnimal);

	}
});