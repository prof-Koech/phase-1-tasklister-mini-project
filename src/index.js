document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById('create-task-form')
  form.addEventListener('submit',(e) => {
    e.preventDefault()
    createTask(e.target['new-task-description'].value)
    form.reset()
  })
});


function createTask (task){
  let li = document.createElement('li');
  let button = document.createElement('button')
  button.addEventListener('click', deleteTask)
  button.textContent = "delete"
  li.textContent = task + "  " // this will create space between task and delete button
  li.appendChild(button)
//grab tasks by Id where tasks will live on DOM
  let taskList = document.getElementById("tasks")
  taskList.appendChild(li)
}


function deleteTask(e){
  e.target.parentNode.remove()
}

