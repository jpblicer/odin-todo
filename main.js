import './style.css'
import { setupCounter } from './counter.js'
import TodoItem from './components/toDo.js'
import Project from './components/project.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Odin Project ToDo w/ Vite</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


// Example usage:
const testTodo = new TodoItem("testName", "testDescript", "1990-01-01", "High");
console.log(testTodo);

const testProject = new Project("projectTitle", "Projectdescription", testTodo)

console.table(testProject)