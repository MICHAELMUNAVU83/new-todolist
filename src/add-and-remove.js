const storedtasks = [];
class TaskBook {
  constructor(taskname, completed, index) {
    this.taskname = taskname,
    this.completed = completed,
    this.index = index,
    this.id = Date.now();
  }
}

const addl = document.getElementById('taskadd');

addl.addEventListener('click', () => {
  const taskel = document.getElementById('taskinput').value;
  const newtask = new TaskBook(taskel, false, storedtasks.length);
  const holdingtask = document.createElement('div');

  holdingtask.classList.add('eachtask');
  holdingtask.innerHTML = `
  <input class="inputcheck" type="checkbox"><p class= "taskp" contenteditable="true">${newtask.taskname}</p>
  <div>
      <ion-icon  name="ellipsis-vertical-outline"></ion-icon><ion-icon class ="${newtask.id}" id="delbtn" name="trash-outline">del</ion-icon>

  </div>


     
                     
      
      `;
  document.getElementById('tasklist').appendChild(holdingtask);
  storedtasks.push(newtask);
  localStorage.setItem('tasks', JSON.stringify(storedtasks));
  document.getElementById('taskinput').value = '';
  function changeContent() {
    const taskp = document.querySelectorAll('.taskp');

    taskp.forEach((item) => {
      let previous = item.textContent;
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const newcontent = item.textContent;
          console.log(newcontent);
          const bla = storedtasks.filter((todo) => todo.taskname === previous);
          storedtasks[bla[0].index].taskname = newcontent;
          previous = newcontent;
          localStorage.setItem('tasks', JSON.stringify(storedtasks));
        }
      });
    });
  }
  changeContent();
});

document.getElementById('tasklist').addEventListener('click', (e) => {
  if (e.target.innerHTML === 'del') {
    e.target.parentElement.parentElement.remove();
    storedtasks.forEach((storedtask, i) => {
      if (
        e.target.parentElement.lastElementChild.classList.contains(
          storedtask.id,
        )
      ) {
        storedtasks.splice(i, 1);
      }
      for (let i = 0; i < storedtasks.length; i + 1) {
        storedtasks[i].index = i;
      }

      localStorage.setItem('tasks', JSON.stringify(storedtasks));
    });
  }

  e.preventDefault();
});

window.addEventListener('load', () => {
  const preservedTasks = JSON.parse(localStorage.getItem('tasks'));
  preservedTasks.forEach((preservedTask) => {
    const holdingtask = document.createElement('div');

    holdingtask.classList.add('eachtask');
    holdingtask.innerHTML = `
    <input class="inputcheck" type="checkbox"><p class= "taskp" contenteditable="true">${preservedTask.taskname}</p>
    <div>
        <ion-icon  name="ellipsis-vertical-outline"></ion-icon><ion-icon class ="${preservedTask.id}" id="delbtn" name="trash-outline">del</ion-icon>
  
    </div>
  
  
       
                       
        
        `;
    document.getElementById('tasklist').appendChild(holdingtask);
  });
});
