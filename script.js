const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const dateInput = document.getElementById('todo-date');
const list = document.getElementById('todo-list');
const toggleDark = document.getElementById('toggle-dark');

toggleDark.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = input.value.trim();
  const datetime = dateInput.value;

  if (text !== "") {
    addTask(text, datetime);
    input.value = '';
    dateInput.value = '';
  }
});

function addTask(text, datetime) {
  const li = document.createElement('li');

  const taskText = document.createElement('div');
  taskText.textContent = text;

  const timeInfo = document.createElement('small');
  if (datetime) {
    const date = new Date(datetime);
    timeInfo.textContent = "🕒 " + date.toLocaleString();
  }

  const btnContainer = document.createElement('div');
  btnContainer.style.marginTop = "8px";

  const btnDone = document.createElement('button');
  btnDone.textContent = '✔';
  btnDone.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const btnDelete = document.createElement('button');
  btnDelete.textContent = '🗑';
  btnDelete.addEventListener('click', () => {
    li.remove();
  });

  btnContainer.appendChild(btnDone);
  btnContainer.appendChild(btnDelete);

  li.appendChild(taskText);
  if (datetime) li.appendChild(timeInfo);
  li.appendChild(btnContainer);

  list.appendChild(li);
}
