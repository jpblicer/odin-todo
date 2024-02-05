let showingToDos = true;

function displayToDos(Project, projectTitle) {    
    if(showingToDos){
        Project.todos.forEach(todo => {
            const todosTitle = document.createElement("div");
            todosTitle.innerText = todo.title;
            
            todosTitle.addEventListener('click', (event) => {
                if (event.target === todosTitle) {
                    event.stopPropagation();
                    displayToDoDetails(Project, todosTitle, todo);
                }
            });

            projectTitle.appendChild(todosTitle);
        });
    }else{
        projectTitle.replaceChildren(projectTitle.firstChild);
    }
    showingToDos = !showingToDos;
}

export default displayToDos;


let showingToDoDetails = true;

function displayToDoDetails(Project, todosTitle, todo) { 
    if (showingToDoDetails) {
        const todosDescription = document.createElement("div");
        const todosdueDate = document.createElement("div");
        const todosPriority = document.createElement("div");

        todosDescription.innerText = todo.description;
        todosdueDate.innerText = todo.dueDate;
        todosPriority.innerText = todo.priority;

        todosTitle.appendChild(todosDescription);
        todosTitle.appendChild(todosdueDate);
        todosTitle.appendChild(todosPriority);
    } else {
        //todosTitle.replaceChildren(projectTitle.firstChild);
        todosTitle.innerHTML = '';
    }
    showingToDos = !showingToDos;
}