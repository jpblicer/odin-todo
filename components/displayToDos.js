let showingToDos = true;

function displayToDos(Project, projectTitle) {    
    if(showingToDos){
        Project.todos.forEach(todo => {
            const todosTitle = document.createElement("div");
            todosTitle.innerText = todo.title;
            projectTitle.appendChild(todosTitle);
        });
    }else{
        projectTitle.replaceChildren(projectTitle.firstChild);
    }
    showingToDos = !showingToDos;
}

export default displayToDos;
