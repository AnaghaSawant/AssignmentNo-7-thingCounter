var items = [];
var count = 0;
var no;

document.addEventListener("DOMContentLoaded", function(event) {
		
	var add = document.getElementById("addBtn");
	var form = document.getElementById("AddForm");
	var btngrp = document.getElementById("btnGrp");
	add.style.display = "block";
	form.style.display = "none";

	this.displayForm = function(){
		add.style.display = "none";
		form.style.display = "block";
		btngrp.style.display = "none";
	} 

	this.addButtons = function(name,color){
		var element1 = document.createElement("input");
		element1.type = "button";
		element1.value = "+";
		element1.id = "inc_"+count;
		element1.className = "increament";
		element1.style.backgroundColor = color;
		console.log(element1);


		var element2 = document.createElement("input");
		element2.type = "button";
		element2.value = "0" + " " +name;
		element2.id = "num_"+count;
		element2.className = "incdec";
		console.log(document.getElementById("clr_0").value)
		element2.style.backgroundColor = color;
		console.log(element2);


		var element3 = document.createElement("input");
		element3.type = "button";
		element3.value = "-";
		element3.id = "dec_"+count;
		element3.className = "decreament";
		element3.style.backgroundColor = color;	
		console.log(element3);

		var lineBreak = document.createElement("br");
		document.getElementById("btnGrp").append(element1,element2,element3,lineBreak);

		items.push(0);
		console.log(items);
	
		form.style.display = "none";
		btngrp.style.display = "block";
		add.style.display = "block";

		var classname = document.getElementsByClassName("decreament");
		console.log(classname);

		for (var i = 0; i < classname.length; i++) {
			console.log("inside for loop",classname[i]);
			classname[i].onclick = function(){
				var decId = this.id;
		    	console.log(decId);
		    	var res = decId.substring(4);
		    	var dec = --items[res-1];
		    	var num = document.getElementById("num_"+res);
		    	num.value = dec + " " +name;
			}
		}

		var classname = document.getElementsByClassName("increament");
		console.log(classname);

		for (var i = 0; i < classname.length; i++) {
			console.log("inside for loop",classname[i]);
			classname[i].onclick = function(){
				var incId = this.id;
		    	console.log(incId);
		    	var res = incId.substring(4);
		    	var inc = ++items[res-1];
		    	var num = document.getElementById("num_"+res);
		    	num.value = inc + " " +name;
			}
		}
	}

	this.submitValue = function(){
		var name = document.getElementById("lbl_0").value
		var color = document.getElementById("clr_0").value
		count++;
		this.addButtons(name,color);
	}

});

