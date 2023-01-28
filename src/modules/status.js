const updateStatus = (index, isCompleted) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  parseInt(index, 10);

  const itemToUpdate = tasks.find((task) => task.index === index);

  itemToUpdate.completed = isCompleted;

  localStorage.setItem('tasks', JSON.stringify(tasks));

  const taskDescription = document.querySelector(`.task-description${index}`);
  if (isCompleted) {
    taskDescription.classList.add('completed');
  } else {
    taskDescription.classList.remove('completed');
  }
};

export { updateStatus as default };