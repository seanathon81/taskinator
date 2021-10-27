//counter
var taskIdCounter = 0;
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
    //validate that form completed correctly
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    
        formEl.reset();

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput,
    }

    createTaskEl(taskDataObj);
}
 
    //create list item
    var createTaskEl = function(taskDataObj) {
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";
      
        // add task id as a custom attribute
        listItemEl.setAttribute("data-task-id", taskIdCounter);
      
        var taskInfoEl = document.createElement("div");
        taskInfoEl.className = "task-info";
        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
        listItemEl.appendChild(taskInfoEl)

        var taskActionsEl = createTaskActions(taskIdCounter);
        listItemEl.appendChild(taskActionsEl);
        tasksToDoEl.appendChild(listItemEl);
      
        // increase task counter for next unique id
        taskIdCounter++;
      };

        

    //taskID allows us to pass a different id into the function
    var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    // create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);
    actionContainerEl.appendChild(editButtonEl);

    // create delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);
    
    actionContainerEl.appendChild(statusSelectEl);

    var statusChoices = ["To Do", "In Progress", "Completed"];

    for (var i = 0; i < statusChoices.length; i++) {
        // create option element
        var statusOptionEl = document.createElement("option");
        statusOptionEl.setAttribute("value", statusChoices[i]);
        statusOptionEl.textContent = statusChoices[i];
        // append to select
        statusSelectEl.appendChild(statusOptionEl);

    return actionContainerEl;
           
     
    
    }
};

    //mouse click event listener and runs taskFormHandler function
    formEl.addEventListener("submit", taskFormHandler);







