let b = document.querySelector('#add-task-btn');
b.addEventListener('click', function(){
    // extract out the value from the textbox
    let task = document.querySelector('#new-task').value;

    let taskList = document.querySelector("#todo-list");
    console.log("--- BEFORE ADDING THE NEW TASK---");
    console.log(taskList.innerHTML);
    taskList.innerHTML =  taskList.innerHTML + `<li>${task}</li>`;
})

document.querySelector('#add-task-using-append-btn').addEventListener('click', function(){
    let task = document.querySelector('#new-task').value;
    let taskList = document.querySelector("#todo-list");

    let isImportant = document.querySelector("#is-important").checked;

    // let isImportant;
    // if ( document.querySelector("#is-important").checked == true) {
    //     isImportant = true;
    // } else {
    //     isImportant = false;
    // }

    // 1. create the new element
    let newTodoElement = document.createElement("li");
    newTodoElement.innerHTML = task;

    if (isImportant) {
        newTodoElement.style.backgroundColor = 'red';
    }

    // 2. append the new element to a parent
    taskList.appendChild(newTodoElement);

    document.querySelector("#new-task").value = "";
    document.querySelector('#is-important').checked = false;


    
})