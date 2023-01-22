import './style.css';
import { fillList } from './modules/fill-render.js';
import { addTaskEvent, taskDescription, TaskList } from './modules/add-task.js';
// eslint-disable-next-line import/named
import { deleteTask } from './modules/delete.js';

const addBtn = document.getElementById('add-btn');

TaskList.innerHTML += fillList();

// Event Listener for button and Enter Keypress that call addTaskEvent
addBtn.addEventListener('click', addTaskEvent);
taskDescription.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTaskEvent();
  }
});

const deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const index = event.target.value;
    deleteTask(index);
    fillList();
  });
});
