function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.filter((task) => task.index !== Number(index));
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export { deleteTask as default };
