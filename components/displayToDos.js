function displayToDos(Project, projectTitle) {
    Project.todos.forEach(todo => {
        const todosTitle = document.createElement("div");
        todosTitle.innerText = todo.title;
        projectTitle.appendChild(todosTitle);
    });
}

export default displayToDos;