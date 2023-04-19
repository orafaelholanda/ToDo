const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');
const completedList = document.querySelector('#completed-list');

function addTask(e) {
    e.preventDefault();
    const newTask = document.createElement('li');
    const newCheckbox = document.createElement('input');
    const newTrashIcon = document.createElement('i');
    newCheckbox.type = 'checkbox';
    newTrashIcon.classList.add('far', 'fa-trash-alt');
    newTask.innerText = input.value;
    newTask.prepend(newCheckbox);
    newTask.appendChild(newTrashIcon);
    newTrashIcon.addEventListener('click', completeTask);
    taskList.appendChild(newTask);
    input.value = '';
  }
  

function completeTask(e) {
    const task = e.target.closest('li');
    if (!task) return;
    if (e.target.type === 'checkbox') {
        const list = task.parentNode.id === 'task-list' ? completedList : taskList;
        list.appendChild(task);
        task.classList.toggle('completed', task.parentNode.id === 'completed-list');
    } else if (e.target.classList.contains('fa-trash-alt')) {
        task.remove(); 
    }
  }  

form.addEventListener('submit', addTask);
taskList.addEventListener('change', completeTask);
completedList.addEventListener('change', completeTask);
