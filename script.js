//your code here
function addlist(){
	let newli = document.createElement("li");
	newli.innerText = document.querySelector("#newTodoInput").value;
	document.querySelector("#todoList").appendChild(newli);
	document.querySelector("#newTodoInput").value ="";
}

