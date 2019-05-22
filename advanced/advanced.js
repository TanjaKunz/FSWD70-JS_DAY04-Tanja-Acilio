var input = document.getElementsByTagName("input");

for(let i = 0; i< input.length; i++){
	input[i].onclick = function(){test(i)};
}
function test(i){
	document.getElementById("input").innerHTML += input[i].value;
	console.log(document.getElementById("input").innerHTML)
}

function result() {
	var a = document.getElementById("input").innerHTML;
	console.log(eval(a));
}











	/*function printInput () {
		
		var value = document.getElementById('b7').value;
		document.getElementById('input').innerHTML=value;
		arr.push(value);
		console.log(arr);
	}*/

	