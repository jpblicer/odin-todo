import './style.css'
import TodoItem from './components/toDo.js'
import Project from './components/project.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Odin Project ToDo w/ Vite</h1>
    <div id="project-container"></div>
  </div>
`
const projectContainer = document.querySelector("#project-container")


const testTodo = new TodoItem("testName", "testDescript", "1990-01-01", "High");
const testProjecta = new Project("projectTitlea", "Projectdescription")
const testProjectb = new Project("projectTitleb", "Projectdescription")


const Projects = [testProjecta, testProjectb]

Projects.forEach(Project => {
  const newTitle = document.createElement("div");
  newTitle.innerText = Project.title;
  projectContainer.appendChild(newTitle);
  newTitle.onclick = () => {
    alert(Project.title);
};
});


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