import './style.css';
import { fillList } from './modules/fill-render.js';
import { addTaskEvent, taskDescription, TaskList } from './modules/add-task.js';

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
