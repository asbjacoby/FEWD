$(document).ready(function(){
	
	var total = 0;

	$('#zero').click(setTotalToZero);
	$('#add5').click(addFive);
	$('#add10').click(addTen);
	$('#sub1').click(subtractOne);

	function setTotalToZero(){
		total = 0;
		printTotalResult();
	}

	function addFive(){
		total = total + 5;
		printTotalResult();
	}

	function addTen(){
		total = total + 5;
		printTotalResult();
	}

	function printTotalResult(){
		$('#result').text(total);
	}
});

