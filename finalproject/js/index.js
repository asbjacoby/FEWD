$(document).ready(function(){

$('.has-children').click(function(event){
	$(".dropdown", this).slideDown(); 
	event.preventDefault();
  });

$('.dropdown, #contact').mouseleave(function(event){
    $('#contact', this).slideUp(); 
    event.preventDefault();
  });
 
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  3000);

});
