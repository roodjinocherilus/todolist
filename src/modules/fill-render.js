import { TaskList } from './add-task';
export let tasks = JSON.parse(localStorage.getItem("tasks"))
// function that fill the Todo List

export const fillList = () => {
    let taskList = '';
    let getTasks = JSON.parse(localStorage.getItem("tasks"))
    for (let i = 0; i < getTasks.length; i++) {
      const taskItem = `<li id="todo-item" class="todo-item"><span><input type="checkbox">${getTasks[i].description}</span><button class="delete" id="delete-btn" value=${i}>Delete</button></li>`;
      taskList += taskItem;
    }
      return TaskList.innerHTML = taskList;
  };

çç
  