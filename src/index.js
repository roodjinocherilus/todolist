import './style.css';

const tasks = require('./tasks.js');
// array of objects
const taskList = document.getElementById('task-list'); // ul dom element

// function that fill the Todo List
const fillList = (tasks) => {
  let taskList = '';
  tasks.forEach((task) => {
    const taskItem = `<li id="todo-item"><input type="checkbox">${task.description}</li>`;
    taskList += taskItem;
  });
  return taskList;
};

// function that sort on index and render taskList
window.onload = () => {
  tasks.sort((a, b) => a.index - b.index);
  taskList.innerHTML = fillList(tasks);
};
