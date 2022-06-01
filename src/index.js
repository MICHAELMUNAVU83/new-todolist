import './styles/main.css';

const divEl = document.querySelector('.task-ul');

const todos = [
  {
    description: 'Creating a frontend project',
    completed: false,
    index: 1,
  },
  {
    description: 'Baking cakes',
    completed: false,
    index: 2,
  },
  {
    description: 'Reading about local storage',
    completed: false,
    index: 3,
  },
  {
    description: 'Cleaning the house',
    completed: false,
    index: 4,
  },
];

todos.forEach((todo) => {
  const div = document.createElement('div');
  div.classList.add('todo-div');
  div.innerHTML = `
    <div>
      <input type="checkbox" id="${todo.index}" />
      </div>
      <div>
      <p contenteditable="true">${todo.description}</p>
      </div>
      <div>
      <ion-icon name="ellipsis-vertical-outline"></ion-icon>
      </div>
      `;
  divEl.appendChild(div);
});