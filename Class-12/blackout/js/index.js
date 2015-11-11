$(document).ready(function(){
	//Set up variable to store whether lights are on of off
	var lights = 'on';
	
	//Listener waiting for user to click the light switch button
	$('#light_switch').click(switchLights);

	function switchLights(){
		//Test to see if lights are on
		if(lights === 'on'){
		//COuld also do if(lightsOn)= true;

			//If yes, change background color to black
			$('body').css('background', 'black');
			//Update the current state to the lights are off
			lights = 'off';
		}else if (lights==='off'){
			$('body').css('background', 'white');
			lights='off';
		}
	}

});
