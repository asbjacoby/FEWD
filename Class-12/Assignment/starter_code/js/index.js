$(document).ready(function(){
	//Set up variable to store default Citipix skyline backgound image
	var city = 'citipix';

	//Listener waiting for user to submit a city name
	$('#submit-btn').click(changePicture);
	function changePicture(event){
		event.preventDefault();
		city = $('#city-type').val();
		if(city === 'Austin' || city === 'austin' || city === 'ATX'){
			$('body').attr('class', 'austin');
		}
		else if(city === 'New York' || city === 'NYC' || city === 'New York City'){
			$('body').attr('class', 'nyc');
		}

		else if(city === 'la' || city === 'los angeles' || city === 'LAX' || city === 'Los Angeles' || city === 'LA'){
			$('body').attr('class', 'la');
		}

		else if(city === 'sf' || city === 'san francisco' || city === 'Bay Area'){
			$('body').attr('class', 'sf');
		}

		else if(city === 'sydney' || city === 'Sydney' || city === 'SYD'){
			$('body').attr('class', 'sydney');
		}

		else{
			$('body').attr('class', 'citipix');
		}

	}

	

});