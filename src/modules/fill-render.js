
export let tasks = JSON.parse(localStorage.getItem("tasks"));

// function that fill the Todo List

export const fillList = (tasks) => {
    let taskList = '';
    tasks.forEach((task) => {
      const taskItem = `<li id="todo-item" class="todo-item"><span><input type="checkbox">${task.description}</span><button class="delete" id="delete-btn">Delete</button></li>`;
      taskList += taskItem;
    });
    return taskList;
  };


  