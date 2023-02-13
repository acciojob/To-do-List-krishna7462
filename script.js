//your code here
function addlist(){
	let task = document.querySelector("#newTodoInput").value;
	if(task.trim().length!=0){
		var newli = document.createElement("li");
		newli.innerText=task;
	}
		document.querySelector("ol").appendChild(newli);
	document.querySelector("#newTodoInput").value ="";
	
	
}

