function sayHi(){
				var name = document.getElementById("name").value;
				document.getElementById("messageContent").innerHTML=
								"<center><h1 style=\"color:green;\"> Hello "+name+"</h1></center>";
}
function sayBye(){
				document.getElementById("messageContent").innerHTML=
								"<center><h1 style=\"color:red;\"> Bye bye</h1></center>";
}

