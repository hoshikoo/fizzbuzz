$(document).ready(function(){

	    
		var fizzBuzz =function(numberInput){
			var numberInput = undefined;
			
		    while(numberInput % 1!=0){
		    	numberInput = prompt("Enter any whole number");
		    	numberInput = Number(numberInput);
				if(numberInput % 1!=0){
				alert(numberInput + " is not a whole number.  Please enter a whole number.");	
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
			};	
		};
	
fizzBuzz(30);

	$("#start").click(function(e){
		e.preventDefault();
	    $("p").remove();
	    fizzBuzz();
	});	

	
});

// });
