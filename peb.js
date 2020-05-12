$(document).ready(function(){
	var hide = $('.div1').hide('slow')
	var show = $('.div1').show('slow')
	if (display === 'active'){
           hide;
	}
		show;	
})

$('#imageHolder').append('<button id = "but1" class = "but">prev</button>')
$('#imageHolder').append('<button id = "but2" class = "but">next</button>')
$('#but2').css('margin-left','801px')
 var pic = [];
  pic[0]= $('#imageHolder').css('background-image', url('1.jpg'));
  pic[1]= $('#imageHolder').css('background-image', url('2.jpg'));
  pic[2]= $('#imageHolder').css('background-image', url('3.jpg'));
  pic[3]= $('#imageHolder').css('background-image', url('4.jpg'));
  pic[4]= $('#imageHolder').css('background-image', url('5.jpg'));
  pic[5]= $('#imageHolder').css('background-image', url('6.jpg'));
console.log(alert(pic))
$('#but1').on('click', function(){
	var i = 0;
	if (i !== 0 ){
	  pic[i--];
	}
     pic[i];
});
$('#but2').on('click', function(){
	if(i < pic[pic.length]){
	     pic[i++];
	}
	    pic[i];
});
$(document).ready(function(){
 	$('.but').addClass("animated bounce");
 });