import { tasks } from "./fill-render";
import { fillList } from "./fill-render";
const TaskList = document.getElementById('task-list'); // ul dom element

export const deleteTask = (index) => {
    tasks = tasks.filter(task => task.index !== index);
    for (let i = 0; i< tasks.length; i++){
        tasks[i].index = i+1;
    }
}


