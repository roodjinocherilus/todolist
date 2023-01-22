// eslint-disable-next-line import/no-cycle
import { TaskList } from './add-task.js';

export const tasks = JSON.parse(localStorage.getItem('tasks'));
// function that fill the Todo List

export const fillList = () => {
  let taskList = '';
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < tasks.length; i += 1) {
    const taskItem = `<li id="todo-item" class="todo-item"><span><input type="checkbox">${tasks[i].description}</span><button class="delete" id="delete-btn" value=${i}>Delete</button></li>`;
    taskList += taskItem;
  }
  TaskList.innerHTML = taskList;
  return TaskList.innerHTML;
};
