import { add } from 'lodash';
import './style.css';
import { fillList } from './modules/fill-render'
import { addTaskEvent } from './modules/add-task';
import { taskDescription } from './modules/add-task';
import { deleteTask } from './modules/delete';
const addBtn = document.getElementById('add-btn');
const deleteBtn = document.getElementById('delete-btn');
import { tasks } from './modules/fill-render';
import { TaskList } from './modules/add-task';


TaskList.innerHTML += fillList()

// Event Listener for button and Enter Keypress that call addTaskEvent
addBtn.addEventListener('click', addTaskEvent);
taskDescription.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTaskEvent();
  }
})



let deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        let index = event.target.value;
        deleteTask(index);
        fillList();
    });
});

