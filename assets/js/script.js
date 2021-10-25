//Select button
var buttonEl = document.querySelector("#save-task");
//Setting variable to li item
var tasksToDoEl = document.querySelector("#tasks-to-do");
//mouse click event listener and function

var createTaskHandler = function() {
    //creates list item
    var listItemEl = document.createElement("li");
    //adds css styling from style sheet to created html element
    listItemEl.className = "task-item";
    //adds text to created html element
    listItemEl.textContent = "This is a new task.";
    //drops in created child into HTML document
    tasksToDoEl.appendChild(listItemEl);
  }
//mouse click event listener and runs createTaskHandler function
buttonEl.addEventListener("click", createTaskHandler)







