import "./styles/main.css";
import "./joke.js"

let storedtasks = [];
class TaskBook {
  constructor(taskname, completed, index) {
    (this.taskname = taskname),
      (this.completed = completed),
      (this.index = index);
    this.id = Date.now();
  }
}
