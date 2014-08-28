$(document).ready(function(){

	
	$("#start").click(function(e){
		e.preventDefault();
	    $("p").remove();
	    var numberInput = undefined;
		var i = undefined;
	    while(isNaN(i)){
	    	numberInput = prompt("Enter any number");
			i = numberInput;
			if(isNaN(i)){
			alert(i + " is not a number.  Please enter a number.");	
			}
	    }
		
		for (i = 1; i <= numberInput; i++) {
	    	if(i%15 === 0){
	    	$("<p>FizzBuzz</p>").appendTo("#result");
	    	}
	    	else if(i%3 === 0){
	        $("<p>Fizz</p>").appendTo("#result");
	    	}
	    	else if(i%5 === 0){
	        $("<p>Buzz</p>").appendTo("#result");
	        }
	    	else{
	        $("<p>"+i+"</p>").appendTo("#result");
	        }
		}	
	});

});
