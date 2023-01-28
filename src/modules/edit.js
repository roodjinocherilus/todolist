// Function to edit a task
const editTask = (index, newDescription) => {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.map((task) => {
    if (task.index === index) {
      task.description = newDescription;
    }
    return task;
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export { editTask as default };