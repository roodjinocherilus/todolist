import { add } from 'lodash';
import './style.css';
import { addTaskEvent } from './modules/add-task';
import { taskDescription } from './modules/add-task';
const addBtn = document.getElementById('add-btn');

// Event Listener for button and Enter Keypress that call addTaskEvent
addBtn.addEventListener('click', addTaskEvent);
taskDescription.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTaskEvent();
  }
})
