// eslint-disable-next-line
import fillList from './fill-render.js';

export const taskDescription = document.getElementById('task-description');
export const TaskList = document.getElementById('task-list'); // ul dom element

// function that adds items to the Array

const addTask = (description, completed = false) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const index = tasks.length + 1;
  tasks.push({
    description,
    completed,
    index,
  });
  tasks.sort((a, b) => a.index - b.index);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  fillList();
};

// function that call the addTask function if description is not null
export const addTaskEvent = () => {
  const description = taskDescription.value;
  if (!description.trim()) {
    return;
  }
  addTask(description);
  taskDescription.value = '';
};
