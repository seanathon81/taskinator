//Select button
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


//mouse click or enter
var taskFormHandler = function(event) {
    //stops browser from refreshing
    event.preventDefault();
    //retrieving value from console dir - value equals user inputed string
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    //retrieving galue from console dir - drop down menu
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // create div to hold task info and add to list item

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput,
    };

    // send it as an argument to creatTaskEl
    createTaskEL(taskDataObj);
 
    }
    //create list item
    var createTaskEL = function(taskDataObj) {
    //css style to list item
    var listItemEl = document.createElement("li");
    //css style to list item
    listItemEl.className = "task-item";   
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to the created div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
    }

    //mouse click event listener and runs taskFormHandler function
    formEl.addEventListener("submit", taskFormHandler);







