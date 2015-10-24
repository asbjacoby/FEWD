$(document).ready(function() {


$('.readmore').click(showP);
$('.readless').click(hideP);
$('.learnmore').click(showSpan);


function showP() {
  $('#show-this-on-click').slideDown();
  $('.readmore').hide();
  $('.readless').show();
  event.preventDefault();
}

function hideP(){
  $('#show-this-on-click').slideUp();
  $('.readmore').show();
  $('.readless').hide();
  event.preventDefault();
}

function showSpan(){
	$('#learnmoretext').slideDown();
	$('.learnmore').hide();
	event.preventDefault();
}

});