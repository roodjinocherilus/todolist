import { fillList } from "./fill-render";
import { tasks } from "./fill-render";
export const taskDescription = document.getElementById('task-description')
const TaskList = document.getElementById('task-list'); // ul dom element

window.onload = function () {
  TaskList.innerHTML = fillList(tasks);
}

// function that adds items to the Array
const addTask = (description, completed = false )=> {
let index = tasks.length + 1;
tasks.push({
  description: description,
  completed: completed,
  index:index,
});
  tasks.sort((a,b) => a.index - b.index)
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

// function that call the addTask function if description is not null
export const addTaskEvent = () => {
  let description = taskDescription.value;
  if (!description) {
    return;
  }
  addTask(description);
  TaskList.innerHTML = fillList(tasks);
  taskDescription.value= " "
}

