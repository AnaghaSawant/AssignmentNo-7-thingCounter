var count = 0;
var currentElem;
var counter = 0;
var added;
var texts = [];

document.addEventListener("DOMContentLoaded", function(event) {
	var form1 = document.getElementById("form1");
	form1.style.display = "none";
	var take_div = document.getElementById("mybutton");
	take_div.style.display = "none";
	this.addForm = function() {
		form1.style.display = "block";
		var add = document.getElementById("add");
		add.style.display = "none";		
		var main = document.getElementById("sub_")
		document.getElementById("mylist").append(main);
		count++;
	}

	this.increament = function()
	{
		var inc = document.getElementById("inc_");
		console.log(inc)
		var high = ++counter;
		document.getElementById("num_").value = high;
		console.log(counter);
	}

	this.decreament = function()
	{
		var dec = document.getElementById("dec_");
		console.log(dec)
		var low = --counter;
		document.getElementById("num_").value = low;
		console.log(counter);
	}

	this.myFunction = function(){
		take_div.display = "block";
		var btn = document.getElementById("btn-grp");
		take_div.append(btn);
	}

});