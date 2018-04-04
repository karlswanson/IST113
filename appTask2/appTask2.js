
function testDom() {

  
  $("#buttonElement").on("click", function() {
    let contentValue = $("#inputContent").val();
	addTask(contentValue)
	inputContent.on( "click", ".delete-button", function(){
  $(this).parent().remove();
	})
  });
  
 
  $("#deletebutton").on("click", function() {
    
    let $lastItem = $("#listOne li").remove();
    
  });
 
}

//var this = testThis ? yessothis : thisbecausefalse

testDom();
var listItems = [];

if (localStorage.getItem("task") !== null) {
	let myItemString = localStorage.getItem("task")
	listItems = JSON.parse(myItemString)
	$(listItems).each(function() {
		addTask(this);
	});
}
else{
	listItems = []
}

//this.parentElement.remove()
var taskID = 0

function addTask(content) {
	listItems[taskID] = content;
	let taskElement = $("<li></li>").text(content);
	taskElement.data("task",taskID) 
	let checkBox = $("<input type='checkbox' />").appendTo(taskElement);
	checkBox.click(function(){
		$("input:checked").parent().remove()	
		listItems.splice($(this).parent().data("task"),1)
		localStorage.setItem("task", JSON.stringify(listItems))
	})
	
    $("#listOne").append(taskElement);
	console.log(listItems)
	taskID++
	localStorage.setItem("task", JSON.stringify(listItems))
	//var jsonstring = json.stringify(array)
	//save the string in the local storage
	
}