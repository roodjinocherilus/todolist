import './style.css';
import { fillList, } from './modules/fill-render.js';
import { addTaskEvent, taskDescription, TaskList,  } from './modules/add-task.js';

import editTask from './modules/edit.js';

document.addEventListener('DOMContentLoaded', () => {
  fillList();


});

const addBtn = document.getElementById('add-btn');

TaskList.innerHTML += fillList();

// Event Listener for button and Enter Keypress that call addTaskEvent
addBtn.addEventListener('click', addTaskEvent);
taskDescription.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTaskEvent();
  }
});

const clearAll = () => {
  localStorage.setItem('tasks', JSON.stringify([]));
  fillList();
};

const clearAllButton = document.querySelector('.clear');
clearAllButton.addEventListener('click', clearAll);





//Event listener for the edit task button
// document.querySelectorAll('.edit').forEach((editButton) => {
//   editButton.addEventListener('click', (event) => {
//   const id = event.target.dataset.taskId;
//   const taskDescription = event.target.closest('.todo-item').querySelector('.task-description');
//   taskDescription.setAttribute('contenteditable', true);
//   taskDescription.focus();
//   //save the new description
//   const saveButton = document.createElement('button');
//   saveButton.innerHTML = "save";
//   saveButton.classList.add('save-task-button');
//   event.target.closest('.todo-item').appendChild(saveButton);

//   saveButton.addEventListener('click', (event) => {
//       const id = event.target.dataset.taskId;
//       const newDescription = event.target.closest('.todo-item').querySelector('.task-description').innerHTML;
//       editTask(id, newDescription);
//       taskDescription.removeAttribute('contenteditable');
//       event.target.closest('.task').removeChild(saveButton);
//       });
//   });
// });