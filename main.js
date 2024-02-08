import './style.css'
import displayProject from './components/displayProjects.js'
import { testProjecta, testProjectb, Projects } from './components/Data.js';
import Project from './components/project.js';


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Odin Project ToDo w/ Vite</h1>
    <button id="add-todo">Add ToDo</button>
    <button id="add-project">Add Project</button>
    <div id="project-container"></div>
  </div>
`

const projectContainer = document.querySelector("#project-container")
const addTodoBtn = document.querySelector("#add-todo")
const addProjectBtn = document.querySelector("#add-project")

function addProject(){
  const myProject = new Project("Project Title", "Project Description");
  console.log(myProject)

}

addTodoBtn.addEventListener("click", testProjecta.addTodo.bind(testProjecta))
addProjectBtn.addEventListener("click", addProject)



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