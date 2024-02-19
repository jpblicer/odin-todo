import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Odin Project ToDo w/ Vite</h1>
    <div id="project-container">
      <input id="inputTodo" type="text">
      <button id="addTodo">+</button>
      <div class = "todos" id="todoContainer">
    </div>
  </div>
`

const addTodoBtn = document.getElementById("addTodo");
const todoContainer = document.getElementById("todoContainer");
const inputTodo = document.getElementById("inputTodo");

addTodoBtn.addEventListener("click", function(){
  let todo = document.createElement("p");
  let todoRemoveBtn = document.createElement("button");
  todoRemoveBtn.textContent = "-";
  todo.innerText = inputTodo.value;
  todo.append(todoRemoveBtn)
  todoContainer.appendChild(todo);

  todoRemoveBtn.addEventListener("click", function(){
    todo.remove(todo)
  })
})