$(document).ready(function(){
	
	//Store city images
	var cities = ['austin.jpg', 'la.jpg', 'nyc.jpg', 'sf.jpg', 'sydney.jpg'];

	var i = 0;
	

	//Array values for dropdown menu
	 var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
	
		for (var i = 0; i < cities.length; i++) {
		$("#city-type").append("<option>" + cities[i] + "</option>");

		};

	//listen for user to select a city
	$('#city-type').change(showCity);	
	//Define functions
	function showCity(){
		cities = $('#city-type').val();
		if (cities === 'NYC'){
			$('body').attr('class', 'nyc');
		}
		else if (cities === 'SF'){
			$('body').attr('class', 'sf');
		}
		else if (cities === 'LA'){
			$('body').attr('class', 'la');
		}
		else if (cities === 'ATX'){
			$('body').attr('class', 'austin');
		}
		else if (cities === 'SYD'){
			$('body').attr('class', 'sydney');
		}
	}

});