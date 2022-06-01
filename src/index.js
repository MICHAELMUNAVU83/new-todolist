import './styles/main.css';

const tasks = [
  {
    description: 'wash the dishes',
    completed: true,
    index: 1,
  },
  {
    description: 'complete to do list',
    completed: true,
    index: 2,
  },
];

tasks.forEach((task) => {
  const holdingtask = document.createElement('div');
  holdingtask.classList.add('eachtask');
  holdingtask.innerHTML += `
      
                  <input type="checkbox" name="name">${task.description}<i
                          class="fa-solid fa-ellipsis-vertical"></i>
          
      
      `;
  document.getElementById('tasklist').appendChild(holdingtask);
});
