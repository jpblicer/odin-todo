import './style.css'
import displayProject from './components/displayProjects.js'
import { testTodo, testProjecta, testProjectb, Projects } from './components/Data.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Odin Project ToDo w/ Vite</h1>
    <div id="project-container"></div>
  </div>
`
console.log(document.querySelector("#project-container"))

const projectContainer = document.querySelector("#project-container")



displayProject(Projects, projectContainer)







/*
TODO:
break out Projects.foreach loop into its own component
instead of alert project.title on click just append each todo title on click
when clicking on project.title again remove the appended children from the dom]

make function to add project
make function to add todos

append buttons to the dom to add inputs for the relevent class properties of todo and project
???
Profit

*/