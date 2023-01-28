// eslint-disable-next-line import/no-cycle
import { TaskList } from './add-task.js';
import deleteTask from './delete.js';
import editTask from './edit.js'
// function that fill the Todo List
// function that fill the Todo List

const attachEventListeners = () => {
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const index = event.target.value;
      deleteTask(index);
      // eslint-disable-next-line no-use-before-define
      fillList();
    });
  });

};
//  const attachEditEventListeners = () => {
// const editButtons = document.querySelectorAll('.edit');
// editButtons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     // const index = event.target.dataset.taskId;
//     const index = event.target.value;
//     console.log(index);
//     const taskDescription = event.target.closest('.task-list').querySelectorAll('.task-description');
//     console.log(taskDescription)
//     taskDescription.setAttribute('contenteditable', true);
//     taskDescription.focus();
//     //save the new description
//     const saveButton = document.createElement('button');
//     saveButton.innerHTML = "save";
//     saveButton.classList.add('save-task-button');
//     saveButton.setAttribute('value', index)
//     // saveButton.style.marginLeft='10px';
//     event.target.closest('.all-btn').appendChild(saveButton);
  
//     saveButton.addEventListener('click', (event) => {
//         // const index = event.target.dataset.taskId;
//         const index = event.target.value;
//         const newDescription = event.target.closest('.task-list').querySelector('.task-description').innerHTML;
      
//         editTask(index, newDescription);
//         taskDescription.removeAttribute('contenteditable');
//         event.target.closest('.all-btn').removeChild(saveButton);
//         })
// });

// });

// };

const attachEditEventListeners = () => {
  const editButtons = document.querySelectorAll('.edit');
  let saveButton; // declare save button outside of event listener

  editButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
          // remove previous save button if exists
          if (saveButton) {
              saveButton.remove();
          }

          // const index = event.target.dataset.taskId;
          const index = event.target.value;
          console.log(index);
          const taskDescription = document.querySelector(`.task-description${index}`)
          console.log(taskDescription);
          taskDescription.setAttribute('contenteditable', true);
          taskDescription.focus();


          //create new save button 
          saveButton = document.createElement('button');
          saveButton.innerHTML = "save";
          saveButton.classList.add('save-task-button');
          saveButton.setAttribute('value', index);
          event.target.closest('.all-btn').appendChild(saveButton);
          saveButton.addEventListener('click', (event) => {
              // const index = event.target.dataset.taskId;
              const index = event.target.value;
              const newDescription = taskDescription.innerHTML; // remove the querySelector
              editTask(index, newDescription);
              taskDescription.removeAttribute('contenteditable');
              saveButton.remove(); // remove the save button after clicking
          });
      });
  });
};






export const fillList = () => {
  let taskList = '';
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
    for (let i = 0; i < tasks.length; i += 1) {
      // const taskItem = `<li id="todo-item" class="todo-item task-description">
      // <span><input type="checkbox">${tasks[i].description}</span>
      // <button class="edit" id="edit-btn" value=${tasks[i].index}>Edit</button>
      // <button class="delete" id="delete-btn" value=${tasks[i].index}>Delete</button>
      // </li>`;

      const taskItem = `<li id="todo-item" class="todo-item">
      <div class="text">
      <input type="checkbox"><p class=" task-description task-description${tasks[i].index}" >${tasks[i].description}</p>
      </div>
      <div class="all-btn">
      <button class="edit" id="edit-btn" value=${tasks[i].index}>Edit</button>
      <button class="delete" id="delete-btn" value=${tasks[i].index}>Delete</button>
      </div>
      </li>`;

      taskList += taskItem;
    }
    TaskList.innerHTML = taskList;
  } else {
    taskList = '<li>No task found</li>';
    TaskList.innerHTML = taskList;
  }
  attachEventListeners();
  attachEditEventListeners();
  // return TaskList.innerHTML;
};
