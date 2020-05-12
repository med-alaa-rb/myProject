$(document).ready(function(){
	var hide = $('.div1').hide('slow')
	var show = $('.div1').show('slow')
//	if (display === 'active'){
  //        hide;
	//}
	//	show;	
})

$('#imageHolder').append('<button id = "but1" class = "but">prev</button>')
$('#imageHolder').append('<button id = "but2" class = "but">next</button>')
$('#but2').css('margin-left','801px')
 var pic = [];
  pic[0]= $('#imageHolder').css('background-image', "url(1.jpg)");
  pic[1]= $('#imageHolder').css('background-image', 'url(2.jpg)');
  pic[2]= $('#imageHolder').css('background-image', 'url(3.jpg)');
  pic[3]= $('#imageHolder').css('background-image', 'url(4.jpg)');
  pic[4]= $('#imageHolder').css('background-image', 'url(5.jpg)');
  pic[5]= $('#imageHolder').css('background-image', 'url(6.jpg)');
alert(pic)
var i = (Math.random() * 10);
$('#but1').on('click', function(){
	if (i !== 0 ){
	  return pic[i--];
	}
    return  pic[i];
});
$('#but2').on('click', function(){
	if(i < pic[pic.length]){
	    return  pic[i++];
	}
	   return  pic[i];
});
$(document).ready(function(){
 	$('.but').addClass("animated bounce");
 });