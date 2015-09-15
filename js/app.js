
///////////////////////////////////////////////


/*function Printer(divId) {
	var lineCount = 1;

	this.printLine = function() {
		var m = lineCount + ': ';

		for (var i = 0; i < arguments.length; i++) {
			m += arguments[i] + ' ';
		}

		var n = document.createElement("pre"),
			t = document.createTextNode(m);

		n.appendChild(t);
		document.getElementById(divId).appendChild(n);

		lineCount++;
	}
}


// create printer
var fizzbuzzPrinter = new Printer('fizzbuzz');

// create printe function
var fzPrint = fizzbuzzPrinter.printLine;

// FizzBuzz function

function fizzbuzz(max) {
	for ( var i = 1; i <= max; i++ ) {
		if (i % 5 == 0 && i % 3 == 0) {
			fzPrint("FizzBuzz");
		} else if ( i % 3 == 0 ) {
			fzPrint("Fizz");
		} else if (i % 5 == 0) {
			fzPrint("Buzz");
		} else {
			fzPrint(i);
		}
	}
}

fizzbuzz(100);*/

////////////////////////////////////////////////////

$(document).ready(function(){

	function countNumbers(maxVal){
		for (var count = 1; count <= maxVal; count++){
			if (count % 3 == 0 && count % 5 == 0){
				$('.content').append('FizzBuzz ');
			}else if (count % 3 == 0){
				$('.content').append('Fizz ');
			}else if (count % 5 == 0){
				$('.content').append('Buzz ');
			}else{
				$('.content').append(count + ' ');
			}
		}
	}


	$('.btn_play').on('click', function(){
		var getValue = $('.txt_input').val();

		if (getValue % 1 == 0 && getValue <= 500){
			$('.content').empty();
			countNumbers(getValue);
			$('.txt_input').val("");
		}else{
			alert('Type only numbers between 1 and 500.');
			$('.txt_input').val("");
		}
	});
});