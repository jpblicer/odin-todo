import './style.css'
import displayProject from './components/displayProjects.js'
import { testProjecta, testProjectb, Projects } from './components/Data.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Odin Project ToDo w/ Vite</h1>
    <button id="add-todo">Add ToDo</button>
    <button>Add Project</button>
    <div id="project-container"></div>
  </div>
`

const projectContainer = document.querySelector("#project-container")
const addTodoBtn = document.querySelector("#add-todo")

addTodoBtn.addEventListener("click", testProjecta.addTodo.bind(testProjecta))



displayProject(Projects, projectContainer)


/*
TODO:
Add empty array to store projects
Create project function
  creates new project from the project.js class
  calls displayProjects after add


Create todo function
  update the project.js class add todo to prompt user for the necessary properties
  calls add todo from project.js class

append buttons to the dom to add inputs for 
  the relevent class properties of todo and project

remove Data.js
*/