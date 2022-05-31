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

const heading = document.querySelector('.heading');

heading.innerHTML = `
    <div class="headingDiv">
                    <p>Today's To Do</p>
                    <i class="fa-solid fa-arrows-rotate"></i>
                  
                </div>
                
                <div class="inputdiv">
                    <input id="taskinput" type="text" placeholder="Add to your list">
                  
                    <i class="fa-solid fa-arrow-right-to-bracket"></i>
    
                </div>
    
    
    `;

tasks.forEach((task) => {
  const holdingtask = document.createElement('div');
  holdingtask.classList.add('eachtask');
  holdingtask.innerHTML += `
        
                    <input type="checkbox" name="name">${task.description}<i
                            class="fa-solid fa-ellipsis-vertical"></i>
            
        
        `;
  document.getElementById('tasklist').appendChild(holdingtask);
});
document.querySelector('.clear').innerHTML = `
    <button class="clearall">Clear all complted</button>
    
    
    `;