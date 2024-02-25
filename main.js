import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Odin Project ToDo w/ Vite</h1>
    <div id="project-container">
      <input id="inputProject" type="text" placeholder="Add Project">
      <button id="addProject">+</button>
      <div class = "Project" id="projectContainer"></div>
    </div>
  </div>
`
const addProjectBtn = document.getElementById("addProject");
const projectContainer = document.getElementById("projectContainer");
const inputProject = document.getElementById("inputProject");


document.addEventListener("DOMContentLoaded", function() {
  const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
  savedProjects.forEach(function(projectText) {
    createProject(projectText);
  });
});


addProjectBtn.addEventListener("click", function(){
  const projectText = inputProject.value;
  createProject(projectText);
  inputProject.value = "";
  saveProject(projectText)

});

function createProject(projectText) {
  const project = document.createElement("h2");
  const projectRemoveBtn = document.createElement("button");
  projectRemoveBtn.textContent = "-";
  project.innerText = projectText;
  project.appendChild(projectRemoveBtn);
  projectContainer.appendChild(project);

  addTodo(project);

  projectRemoveBtn.addEventListener("click", function(){
    project.remove();
    removeProject(projectText);
  });
}

class Todo{
  constructor(todoTitle, todoDescription, todoDue, todoPriority){
    this.todoTitle = todoTitle;
    this.todoDescription = todoDescription;
    this.todoDue = todoDue;
    this.todoPriority = todoPriority;
  }
}


function addTodo(project){
  const inputTodo = document.createElement("input");
  inputTodo.id = "inputTodo";
  inputTodo.type = "text";
  inputTodo.placeholder = "Add Todo";


  const addTodoBtn = document.createElement("button");
  addTodoBtn.textContent = "+";
  addTodoBtn.id = "addTodo";

  const todoContainer = document.createElement("div");
  todoContainer.className = "todos";
  todoContainer.id="todoContainer";

  todoContainer.appendChild(inputTodo);
  todoContainer.appendChild(addTodoBtn)
  project.appendChild(todoContainer)

  addTodoBtn.addEventListener("click", function(){
    const todoTitle = inputTodo.value;
    const todoDescription = prompt("Description:");
    const todoDue = prompt("Due");
    const todoPriority = prompt("Priority:")

    const newTodo = new Todo(todoTitle, todoDescription, todoDue, todoPriority);
    
    const todo = document.createElement("p");
    todo.innerText = todoTitle;

    const todoRemoveBtn = document.createElement("button");
    todoRemoveBtn.textContent = "-";
        
    todo.addEventListener("click", function(){
      alert(newTodo.todoTitle + " is due on " + newTodo.todoDue + " and has a priority of " + newTodo.todoPriority + " \n\n Description: \n\n" + newTodo.todoDescription)
    });
    
    todo.appendChild(todoRemoveBtn)
    todoContainer.appendChild(todo);

    saveTodo(newTodo, project.innerText);


    todoRemoveBtn.addEventListener("click", function(e){
      e.stopPropagation()
      todo.remove()
      removeTodo(newTodo, project.innerText);
    });

  });
};

function saveProject(projectText){
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.push(projectText);
  localStorage.setItem("projects", JSON.stringify(projects));
}

function removeProject(projectText){
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  let index = projects.indexOf(projectText);
  if(index != -1){
    projects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(projects));
  }
}

function saveTodo(todo, projectName){
  let todos = JSON.parse(localStorage.getItem("todos")) || {};
  todos[projectName] = todos[projectName] || [];
  todos[projectName].push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodo(todo, projectName){
  let todos = JSON.parse(localStorage.getItem("todos")) || {};
  if (todos[projectName]) {
    todos[projectName] = todos[projectName].filter(i => i.todoTitle !== todo.todoTitle);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}