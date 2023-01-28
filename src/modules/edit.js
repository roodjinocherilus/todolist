import { fillList } from "./fill-render";

// Function to edit a task
const editTask = (index, newDescription) => {
    console.log(newDescription);
        console.log(index);
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    console.log(tasks)
    tasks = tasks.map((task) => {
      if (task.index == index) {
        task.description = newDescription;
      }
      return task;

    });
 
    localStorage.setItem('tasks', JSON.stringify(tasks));
   
    fillList();

  }

  
  export { editTask as default };