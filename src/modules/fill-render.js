// eslint-disable-next-line import/no-cycle
import { TaskList } from './add-task.js';
import deleteTask from './delete.js';

export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// function that fill the Todo List

const attachEventListeners = () => {
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const index = event.target.value;
      deleteTask(index);
      // eslint-disable-next-line no-use-before-define
      fillList();
    });
  });
};

export const fillList = () => {
  let taskList = '';
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
    for (let i = 0; i < tasks.length; i += 1) {
      const taskItem = `<li id="todo-item" class="todo-item"><span><input type="checkbox">${tasks[i].description}</span><button class="delete" id="delete-btn" value=${tasks[i].index}>Delete</button></li>`;
      taskList += taskItem;
    }
    TaskList.innerHTML = taskList;
  } else {
    taskList = '<li>No task found</li>';
    TaskList.innerHTML = taskList;
  }
  attachEventListeners();
  return TaskList.innerHTML;
};
