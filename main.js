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


addProjectBtn.addEventListener("click", function(){
  const project = document.createElement("h2");
  const projectRemoveBtn = document.createElement("button");
  projectRemoveBtn.textContent = "-";
  project.innerText = inputProject.value;
  project.append(projectRemoveBtn)
  projectContainer.appendChild(project);

  addTodo(project);

  projectRemoveBtn.addEventListener("click", function(){
    project.remove()
  });
});


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

    todoRemoveBtn.addEventListener("click", function(e){
      e.stopPropagation()
      todo.remove()
    })
  })
};

