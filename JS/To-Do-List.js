const taskList = document.getElementById('task-list');
const addTaskForm = document.getElementById('add-task-form');
const clearCompletedButton = document.getElementById('clear-completed');

addTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value;
  const newTask = document.createElement('li');
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  newTask.textContent = taskText;
  newTask.appendChild(completeButton);
  taskList.appendChild(newTask);
  taskInput.value = '';
});

taskList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName.toLowerCase() === 'button') {
    const task = target.parentElement;
    task.classList.toggle('completed');
  }
});

clearCompletedButton.addEventListener('click', () => {
  const completedTasks = document.querySelectorAll('.completed');
  completedTasks.forEach((task) => {
    task.remove();
  });
});

const darkModeButton = document.getElementById('dark-mode-button');
const body = document.body;

darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
