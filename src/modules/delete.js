import { tasks } from "./fill-render";
import { fillList } from "./fill-render";
const TaskList = document.getElementById('task-list'); // ul dom element



export function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    let tasksCopy = [...tasks];
    console.log(tasksCopy)
    tasksCopy = tasksCopy.filter(task => task.index !== index);
    console.log(tasksCopy)
   
    for (let i = 0; i < tasksCopy.length; i++) {
        tasksCopy[i].index = i + 1;
    }
    tasks = tasksCopy;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    fillList();
    //   for (let i = 0; i < tasks.length; i++) {
    //       tasks[i].index = i + 1;
    //   }
    
  }