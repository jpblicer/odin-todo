import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Odin Project ToDo w/ Vite</h1>
    <div id="project-container">
      <input id="inputProject" type="text" placeholder="Add Project">
      <button id="addProject">+</button>
      <div class = "Project" id="projectContainer">
    </div>
  </div>
`


  const addProjectBtn = document.getElementById("addProject");
  const projectContainer = document.getElementById("projectContainer");
  const inputProject = document.getElementById("inputProject");

  addProjectBtn.addEventListener("click", function(){
    let project = document.createElement("h1");
    let projectRemoveBtn = document.createElement("button");
    projectRemoveBtn.textContent = "-";
    project.innerText = inputProject.value;
    project.append(projectRemoveBtn)
    projectContainer.appendChild(project);

    addTodo(project)
    projectRemoveBtn.addEventListener("click", function(){
      project.remove()
    })
  })





function addTodo(project){

  const inputTodo = document.createElement("input");
  inputTodo.id = "inputTodo";
  inputTodo.type = "text";
  inputTodo.placeholder = "Add Todo";


  const addTodoBtn = document.createElement("button");
  addTodoBtn.textContent = "+";
  addTodoBtn.id = "addTodo";

  let todoContainer = document.createElement("div");
  todoContainer.className = "todos";
  todoContainer.id="todoContainer";

  todoContainer.appendChild(inputTodo);
  todoContainer.append(addTodoBtn)

  project.appendChild(todoContainer)

  addTodoBtn.addEventListener("click", function(){
    let todo = document.createElement("p");
    let todoRemoveBtn = document.createElement("button");
    todoRemoveBtn.textContent = "-";
    todo.innerText = inputTodo.value;
    todo.append(todoRemoveBtn)
    todoContainer.appendChild(todo);

    todoRemoveBtn.addEventListener("click", function(){
      todo.remove()
    })
  })
};