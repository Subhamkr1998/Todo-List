// document.addEventListener('DOMContentLoaded', () => {
//   const taskInput = document.getElementById('taskInput');
//   const addTaskButton = document.getElementById('addTaskButton');
//   const taskList = document.getElementById('taskList');

//   // Function to create a new task element
//   function createTaskElement(task) {
//     const taskItem = document.createElement('li');
//     taskItem.className = 'task-item';
    
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.checked = task.completed;
//     checkbox.addEventListener('change', () => {
//       task.completed = checkbox.checked;
//       renderTasks();
//     });

//     const taskText = document.createElement('span');
//     taskText.textContent = task.title;
//     if (task.completed) {
//       taskText.style.textDecoration = 'line-through';
//       taskText.style.color = '#888';
//     }

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.addEventListener('click', () => {
//       tasks = tasks.filter(t => t !== task);
//       renderTasks();
//     });

//     taskItem.appendChild(checkbox);
//     taskItem.appendChild(taskText);
//     taskItem.appendChild(deleteButton);

//     return taskItem;
//   }

//   // Render tasks
//   function renderTasks() {
//     taskList.innerHTML = '';
//     tasks.forEach(task => {
//       taskList.appendChild(createTaskElement(task));
//     });
//   }

//   // Add task
//   addTaskButton.addEventListener('click', () => {
//     const title = taskInput.value.trim();
//     if (title) {
//       tasks.push({ title, completed: false });
//       taskInput.value = '';
//       renderTasks();
//     }
//   });

//   // Initial empty task array
//   let tasks = [];

//   // Render initial empty task list
//   renderTasks();
// });

document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTaskButton');
  const taskList = document.getElementById('taskList');

  // Function to create a new task element
  function createTaskElement(task) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      renderTasks();
    });

    const taskText = document.createElement('span');
    taskText.textContent = task.title;
    if (task.completed) {
      taskText.style.textDecoration = 'line-through';
      taskText.style.color = '#888';
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks = tasks.filter(t => t !== task);
      renderTasks();
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);

    return taskItem;
  }

  // Render tasks
  function renderTasks() {
    taskList.innerHTML = '';
    // Add tasks in reverse order to display new tasks at the top
    tasks.forEach(task => {
      taskList.prepend(createTaskElement(task));
    });
  }

  // Add task
  addTaskButton.addEventListener('click', () => {
    const title = taskInput.value.trim();
    if (title) {
      tasks.unshift({ title, completed: false }); // Add to the beginning of the array
      taskInput.value = '';
      renderTasks();
    }
  });

  // Initial empty task array
  let tasks = [];

  // Render initial empty task list
  renderTasks();
});
