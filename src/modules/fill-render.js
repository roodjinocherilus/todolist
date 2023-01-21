
export let tasks = [];
// array of objects

// function that fill the Todo List

export const fillList = (tasks) => {
    let taskList = '';
    tasks.forEach((task) => {
      const taskItem = `<li id="todo-item"><input type="checkbox">${task.description}</li>`;
      taskList += taskItem;
    });
    return taskList;
  };
