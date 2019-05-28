const form = document.querySelector('form');
const ulAdd = document.querySelector('ul.add');
const ulSearch = document.querySelector('ul.search');
const addInput = document.querySelector('.addInput');
const searchInput = document.querySelector('.searchInput');
const tasks = [];

const getDataset = () => {
  ulAdd.textContent = '';
  tasks.forEach((task, index) => {
    task.dataset.key = index;
    ulAdd.appendChild(task);
  })
};

const removeTask = e => {
  tasks.splice(e.target.parentNode.dataset.key, 1);
  getDataset();
};

const addTask = e => {
  e.preventDefault();
  const taskTitle = addInput.value;
  if (!taskTitle) return;
  const task = document.createElement('li');
  const btn = document.createElement('button');
  btn.textContent = 'usuń';
  task.innerHTML = taskTitle;
  task.appendChild(btn);
  tasks.push(task);
  getDataset();

  task.querySelector('button').addEventListener('click', removeTask);
  addInput.value = '';
};

const searchTask = e => {
  ulSearch.textContent = '';
  const matchingTasks = tasks.filter(task => task.firstChild.nodeValue.toLowerCase().includes(e.target.value.toLowerCase()));
  matchingTasks.forEach(task => {
    const newEl = document.createElement('li');
    newEl.textContent = task.firstChild.nodeValue;
    ulSearch.appendChild(newEl);
  });

  if (e.target.value === '') ulSearch.textContent = '';

};

searchInput.addEventListener('input', searchTask);
form.addEventListener('submit', addTask);