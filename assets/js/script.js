//Select button
var formEl = document.querySelector("#task-form");

var tasksToDoEl = document.querySelector("#tasks-to-do");


//mouse click or enter
var createTaskHandler = function(event) {
    //stops browser from refreshing
    event.preventDefault();
    
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
formEl.addEventListener("submit", createTaskHandler);







