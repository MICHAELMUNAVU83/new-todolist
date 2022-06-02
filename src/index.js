import "./styles/main.css";

let storedtasks = [];
class TaskBook {
  constructor(taskname, completed, index) {
    (this.taskname = taskname),
      (this.completed = completed),
      (this.index = index);
    this.id = Date.now();
  }
}
let addl = document.getElementById("taskadd")


addl.addEventListener("click", function () {
  let taskel = document.getElementById("taskinput").value;
  let newtask = new TaskBook(taskel, false, storedtasks.length);
  var holdingtask = document.createElement("div");

  holdingtask.classList.add("eachtask");
  holdingtask.innerHTML = `
  <input class="inputcheck" type="checkbox"><p class= "taskp" contenteditable="true">${newtask.taskname}</p>
  <div>
      <ion-icon  name="ellipsis-vertical-outline"></ion-icon><ion-icon class ="${newtask.id}" id="delbtn" name="trash-outline">del</ion-icon>

  </div>


     
                     
      
      `;
  document.getElementById("tasklist").appendChild(holdingtask);
  storedtasks.push(newtask);
  localStorage.setItem("tasks", JSON.stringify(storedtasks));
  document.getElementById("taskinput").value = "";
  function changeContent() {
    let taskp = document.querySelectorAll(".taskp");

    taskp.forEach((item) => {
      let previous = item.textContent;
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          let newcontent = item.textContent;
          console.log(newcontent);
          const bla = storedtasks.filter((todo) => todo.taskname === previous);
          storedtasks[bla[0].index].taskname = newcontent;
          previous = newcontent;
          localStorage.setItem("tasks", JSON.stringify(storedtasks));
        }
      });
    });
  }
  changeContent();
});

document.getElementById("tasklist").addEventListener("click", function (e) {
  if (e.target.innerHTML == "del") {
    e.target.parentElement.parentElement.remove();
    storedtasks.forEach((storedtask, i) => {
      if (
        e.target.parentElement.lastElementChild.classList.contains(
          storedtask.id
        )
      ) {
        storedtasks.splice(i, 1);
      }
      for (let i = 0; i < storedtasks.length; i++) {
        storedtasks[i].index = i;
      }

      localStorage.setItem("tasks", JSON.stringify(storedtasks));
    });
  }

  e.preventDefault();
});

window.addEventListener("load", function () {
  const preservedTasks = JSON.parse(localStorage.getItem("tasks"));
  preservedTasks.forEach((preservedTask) => {
    var holdingtask = document.createElement("div");

    holdingtask.classList.add("eachtask");
    holdingtask.innerHTML = `
    <input class="inputcheck" type="checkbox"><p class= "taskp" contenteditable="true">${preservedTask.taskname}</p>
    <div>
        <ion-icon  name="ellipsis-vertical-outline"></ion-icon><ion-icon class ="${preservedTask.id}" id="delbtn" name="trash-outline">del</ion-icon>
  
    </div>
  
  
       
                       
        
        `;
    document.getElementById("tasklist").appendChild(holdingtask);
  });
});
