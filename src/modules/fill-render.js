// eslint-disable-next-line
import { TaskList } from './add-task.js';
import deleteTask from './delete.js';
import editTask from './edit.js';
// function that fill the Todo List
// function that fill the Todo List

const attachEventListeners = () => {
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const index = event.target.value;
      deleteTask(index);
      // eslint-disable-next-line
      fillList();
    });
  });
};

const attachEditEventListeners = () => {
  const editButtons = document.querySelectorAll('.edit');
  let saveButton; // declare save button outside of event listener

  editButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // remove previous save button if exists
      if (saveButton) {
        saveButton.remove();
      }
      const index = event.target.value;
      const taskDescription = document.querySelector(`.task-description${index}`);
      taskDescription.setAttribute('contenteditable', true);
      taskDescription.focus();

      // create new save button
      saveButton = document.createElement('button');
      saveButton.innerHTML = 'save';
      saveButton.classList.add('save-task-button');
      saveButton.setAttribute('value', index);
      event.target.closest('.all-btn').appendChild(saveButton);
      saveButton.addEventListener('click', (event) => {
        const index = event.target.value;
        const newDescription = taskDescription.innerHTML; // remove the querySelector
        editTask(index, newDescription);
        taskDescription.removeAttribute('contenteditable');
        saveButton.remove(); // remove the save button after clicking
      });
    });
  });
};

const fillList = () => {
  let taskList = '';
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
    for (let i = 0; i < tasks.length; i += 1) {
      const taskItem = `<li id="todo-item" class="todo-item">
      <div class="text">
      <input type="checkbox"><p class=" task-description task-description${tasks[i].index}" >${tasks[i].description}</p>
      </div>
      <div class="all-btn">
      <button class="edit" id="edit-btn" value=${tasks[i].index}>Edit</button>
      <button class="delete" id="delete-btn" value=${tasks[i].index}>Delete</button>
      </div>
      </li>`;

      taskList += taskItem;
    }
    TaskList.innerHTML = taskList;
  } else {
    taskList = '<li>No task found</li>';
    TaskList.innerHTML = taskList;
  }
  attachEventListeners();
  attachEditEventListeners();
};

export { fillList as default };