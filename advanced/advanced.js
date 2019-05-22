var arr = new Array();



var input = document.getElementsByTagName("input");

for(let i = 0; i< input.length; i++){
	input[i].onclick = function(){test(i)};
}
function test(i){
	document.getElementById("input").innerHTML += input[i].value;
	
}

function result() {

	document.getElementById("output").value = input;
	console.log(input);
}











	/*function printInput () {
		
		var value = document.getElementById('b7').value;
		document.getElementById('input').innerHTML=value;
		arr.push(value);
		console.log(arr);
	}*/

	