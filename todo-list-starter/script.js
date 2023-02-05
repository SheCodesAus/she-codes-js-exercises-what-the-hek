let todoTaskText = [
    "Buy milk",
    "Eat dinner",
    "Nail javascript",
    "Give feedback",
]

let todoTasksStatus = [true, false, false, true];
let todoTaskImportant = [false, true, false, false];

// grab the UL element
let todoList = document.getElementById("todo-list");

function createNewTaskElement(task, index) {
    // Grab a new <p> element
    let newTodoTaskTextElement = document.createElement("p");
    // set the new text of the <p> element
    newTodoTaskTextElement.innerText = task;


    // mark the task as complete if the status is true, links to the CSS for 'complete'
    if (todoTasksStatus[index] === true) {
        newTodoTaskTextElement.classList.add("complete");
    }

    if (todoTaskImportant[index] === true) {
        newTodoTaskTextElement.classList.add("important");
    }

    // create a new <li> element and append the <p> element to it
    let newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    // create a new <button> element and append it to the <li> element
    let completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Complete";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    }
    newTodoTaskElement.appendChild(completeButtonElement);

    let importantButtonElement = document.createElement("input");
    importantButtonElement.type = "button";
    importantButtonElement.value = "Important";
    importantButtonElement.onclick = function () {
        toggleImportant(index);
    }
    newTodoTaskElement.appendChild(importantButtonElement);

    return newTodoTaskElement;
}

function addTask() {
    let newTask = document.getElementById("new-task-text");
    // check the users input isn't an empty string
    if (newTask.value) {
        todoTaskText.push(newTask.value);
        // default status for the new item
        todoTasksStatus.push(false);
        newTask.value = "";
        updateTodoList();
    }
}

function updateTodoList() {
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    // loop through the todoTasksText array (arrow function)
    todoTaskText.forEach((task, index) => {
        let newTodoTaskElement = createNewTaskElement(task, index);
        // append the <li> element to the <ul> element
        todoList.appendChild(newTodoTaskElement);
    });
}

// function createNewTodoItemElement(todoItem, index) {}

function toggleComplete(index) {
    // console.log("Before", todoTasksStatus[index]);
    if (todoTasksStatus[index] === false) {
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    updateTodoList();
    // console.log("After", todoTasksStatus[index]);
}

function toggleImportant(index) {
    console.log("Before", todoTaskImportant[index]);
    if (todoTaskImportant[index] === false) {
        todoTaskImportant[index] = true;
    } else {
        todoTaskImportant[index] = false;
    }
    updateTodoList();
    console.log("After", todoTaskImportant[index]);
}

updateTodoList();