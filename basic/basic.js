	// Exercise 1
	function calculate(){
		var birthYear = document.getElementById('birthYear').value;

	var findAge = {
		birthYear: birthYear,
		currentDate: new Date().getFullYear(),
		calcAge: function (){
			return this.currentDate - this.birthYear;

		}

	}


	var result = document.getElementById('result');
 
			result.innerHTML = '<h2>Your age is ' + findAge.calcAge() + ' :)<br> </h2>';

			return false
	}

	
	document.write("<br>");
	document.write("<hr>");
	document.write("<br>");

	//Exercise 2

	function cutTheString () {
		var string1 = document.getElementById('string1').value;
		var cut = document.getElementById('cut').value;
		var newPhrase = string1.substring(0,cut);
		var phrase = document.getElementById('phrase');
 
			phrase.innerHTML = '<h2> ' + newPhrase + ' :)<br> </h2>';

			return false

	}
	document.write("<br>");
	document.write("<hr>");
	document.write("<br>");

	// Exercise 3
	function statement(){
		var name = document.getElementById('name').value;
		var surname = document.getElementById('surname').value;
		var alter = document.getElementById('alter').value;
		var description = document.getElementById('description').value;

		var info  = {
			name: name,
			surname: surname,
			alter: alter,
			description: description,
			putTogether: function (){
				return "Hi I am " + this.name + " " +this.surname+ " I am " +this.alter+ "years old and I am a " +this.description+"<br>";

			}

	}

	var output = document.getElementById('output');
 
			output.innerHTML = '<h2>' +info.putTogether()+ ' :)<br> </h2>';

			return false
	}


