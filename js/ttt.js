$(document).ready(function() {
// JavaScript Document
	var total= 0;
	var index = 0;
	var itemArray = [];
	var turn = 0;
	var one = ' ';
	var two = ' ';
	var three = ' ';
	var four = ' ';
	var five = ' ';
	var six = ' ';
	var seven = ' ';
	var eight = ' ';
	var nine = ' ';
	var win = ' ';
	var end = 0;
$("#clear").hide();

$("#btn1").click(function(){
	console.log(end);
if(end==0){	
	if(one==' '){
		if(turn%2 == 1){
			$(this).html("<img id='1' src='circle.png'>");
			one="O";

		}else{
			$(this).html("<img id='1' src='cross.png'>");
			one="X";
		}
		turn++;
		console.log(end);
		if(turn>=4){
	check('cross','X');
	check('circle','O')
}

	}
}

});
$("#btn2").click(function(){
if(end==0){	
	if(two==' '){
		if(turn%2 == 1){
			$(this).html("<img id='2' src='circle.png'>");
			two="O";
		}else{
			$(this).html("<img id='2' src='cross.png'>");
			two="X";
		}
		turn++;
		console.log(end);
		if(turn>=4){
	check('cross','X');
	check('circle','O')
		}

	}	
}

});
$("#btn3").click(function(){
if(end==0){	
	if(three==' '){
		if(turn%2 == 1){
			$(this).html("<img id='3' src='circle.png'>");
			three="O";
		}else{
			$(this).html("<img id='3' src='cross.png'>");
			three="X";
		}
		turn++;
		console.log(end);
		if(turn>=4){
	check('cross','X');
	check('circle','O')
}
	}
}	
});
$("#btn4").click(function(){

if(end==0){	
	if(four==' '){
		if(turn%2 == 1){
			$(this).html("<img id='4' src='circle.png'>");
			four="O";
		}else{
			$(this).html("<img id='4' src='cross.png'>");
			four="X";
		}
		turn++;
		console.log(end);
		if(turn>=4){
	check('cross','X');
	check('circle','O')
}
	}	
}
});

$("#btn5").click(function(){
if(end==0){	
	if(five==' '){
		if(turn%2 == 1){
			$(this).html("<img id='5' src='circle.png'>");
			five="O";
		}else{
			$(this).html("<img id='5' src='cross.png'>");
			five="X";
		}
		turn++;
		console.log(end);
		if(turn>=4){
	check('cross','X');
	check('circle','O')
}
	}	
}
});

$("#btn6").click(function(){
if(end==0){	
	if(six==' '){
		if(turn%2 == 1){
			$(this).html("<img id='6' src='circle.png'>");
			six="O";
		}else{
			$(this).html("<img id='6' src='cross.png'>");
			six="X";
		}
		turn++;
		console.log(end);
		if(turn>=4){

	check('cross','X');
	check('circle','O')
}
	}	
}
});

$("#btn7").click(function(){	
	if(end==0){
	if(seven==' '){
		if(turn%2 == 1){
			$(this).html("<img id='7' src='circle.png'>");
			seven="O";
		}else{
			$(this).html("<img id='7' src='cross.png'>");
			seven="X";
		}
		turn++;
		console.log(end);
		if(turn>=4){
	check('cross','X');
	check('circle','O')
}
	}
	}	

});
$("#btn8").click(function(){
if(end==0){	
	if(eight==' '){
		if(turn%2 == 1){
			$(this).html("<img id='8' src='circle.png'>");
			eight="O";
		}else{
			$(this).html("<img id='8' src='cross.png'>");
			eight="X";
		}
		turn++;
		console.log(end);
		if(turn>=4){
	check('cross','X');
	check('circle','O')
}
	}
	}	

});
$("#btn9").click(function(){
if(end==0){	
	if(nine==' '){
		if(turn%2 == 1){
			$(this).html("<img id='9' src='circle.png'>");
			nine="O";
		}else{
			$(this).html("<img id='9' src='cross.png'>");
			nine="X";
		}
		turn++;
		console.log(end);
		if(turn>=4){
	check('cross','X');
	check('circle','O')
		}
	}
	}	
 });


function check(side,sideVar){
	if((one==sideVar && two==sideVar && three==sideVar) || (four==sideVar && five==sideVar && six==sideVar) || (seven==sideVar && eight==sideVar && nine==sideVar) ){
		win=side;
		end=1;
	}
	if((one==sideVar && four==sideVar && seven==sideVar) || (two==sideVar && five==sideVar && eight==sideVar) || (three==sideVar && six==sideVar && nine==sideVar) ){
		win=side;
		end=1;
	}
	if((one==sideVar && five==sideVar && nine==sideVar) || (three==sideVar && five==sideVar && seven==sideVar)){
		win=side;
		end=1;
	}
	console.log(win);
	if(win == 'cross'){
	$("#display").html("X wins!");
	$("#clear").show();
}
	if(win == 'circle'){
	$("#display").html("O wins!");
	$("#clear").show();
}
	if(win == ' ' && turn==9){
	$("#display").html("Tie!");
	$("#clear").show();
}
}

$("#clear").click(function(){
	total= 0;
	index = 0;
	itemArray = [];
	turn = 0;
	one = ' ';
	two = ' ';
	three = ' ';
	four = ' ';
	five = ' ';
	six = ' ';
	seven = ' ';
	eight = ' ';
	nine = ' ';
	win = ' ';
	end = 0;
	$("#clear").hide();
	$("#display").html("")
	$('#btn1').html("<img id='1' width='50px' hieght='50px' src='blank.png'>");
	$('#btn2').html("<img id='2' width='50px' hieght='50px' src='blank.png'>");
	$('#btn3').html("<img id='3' width='50px' hieght='50px' src='blank.png'>");
	$('#btn4').html("<img id='4' width='50px' hieght='50px' src='blank.png'>");
	$('#btn5').html("<img id='5' width='50px' hieght='50px' src='blank.png'>");
	$('#btn6').html("<img id='6' width='50px' hieght='50px' src='blank.png'>");
	$('#btn7').html("<img id='7' width='50px' hieght='50px' src='blank.png'>");
	$('#btn8').html("<img id='8' width='50px' hieght='50px' src='blank.png'>");
	$('#btn9').html("<img id='9' width='50px' hieght='50px' src='blank.png'>");
	});	




});