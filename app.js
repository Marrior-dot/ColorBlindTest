let button = document.getElementById("testStart");

button.addEventListener("click",function(){
	let test = document.getElementById("images");
	let result = document.getElementById("results");
	result.style.display = 'flex';
	test.style.display = 'flex';
	button.style.display = 'none';
	console.log(test);
} )
