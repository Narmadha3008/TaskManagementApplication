function addTask(){

    let input=document.getElementById("taskInput");

    let task=input.value;

    if(task===""){
        alert("Enter a task");
        return;
    }

    let li=document.createElement("li");

    li.innerHTML=`
        <span>${task}</span>

        <div>

        <button onclick="completeTask(this)">Done</button>

        <button onclick="editTask(this)">Edit</button>

        <button onclick="deleteTask(this)">Delete</button>

        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value="";
}

function deleteTask(button){

    button.parentElement.parentElement.remove();

}

function completeTask(button){

    let task=button.parentElement.previousElementSibling;

    task.classList.toggle("completed");

}

function editTask(button){

    let task=button.parentElement.previousElementSibling;

    let newTask=prompt("Edit Task",task.innerText);

    if(newTask!=null && newTask!=""){

        task.innerText=newTask;

    }

}