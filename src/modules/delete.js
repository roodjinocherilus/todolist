import { fillList } from './fill-render.js';

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksCopy = [...tasks];
  tasksCopy = tasksCopy.filter((task) => task.index !== index);
  for (let i = 0; i < tasksCopy.length; i += 1) {
    tasksCopy[i].index = i + 1;
  }
  tasks = tasksCopy;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  fillList();
  //   for (let i = 0; i < tasks.length; i++) {
  //       tasks[i].index = i + 1;
  //   }
}

export { deleteTask as default };
