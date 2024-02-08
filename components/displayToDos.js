let showingToDos = false; 

function displayToDos(Project, projectTitle) {    
    if(showingToDos){
        while (projectTitle.children.length > 0) {
            projectTitle.removeChild(projectTitle.lastChild);
        }
    } else {
        Project.todos.forEach(todo => {
            const todosTitle = document.createElement("div");
            todosTitle.innerText = todo.title;
            
            todosTitle.addEventListener('click', (event) => {
                event.stopPropagation(); 
                displayToDoDetails(Project, todosTitle, todo);
            });

            projectTitle.appendChild(todosTitle);
        });
    }
    showingToDos = !showingToDos;
}

export default displayToDos;

let showingToDoDetails = false;

function displayToDoDetails(Project, todosTitle, todo) { 
    if (showingToDoDetails) {
        while (todosTitle.children.length >= 1) {
            todosTitle.removeChild(todosTitle.lastChild);
        }
    } else {
        const todosDescription = document.createElement("div");
        const todosdueDate = document.createElement("div");
        const todosPriority = document.createElement("div");

        todosDescription.innerText = todo.description;
        todosdueDate.innerText = todo.dueDate;
        todosPriority.innerText = todo.priority;

        todosTitle.appendChild(todosDescription);
        todosTitle.appendChild(todosdueDate);
        todosTitle.appendChild(todosPriority);
    }
    showingToDoDetails = !showingToDoDetails; 
}