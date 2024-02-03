function displayToDos(Project) {
        Project.todos.forEach(todo => {
            console.log(todo)
        });
        //const toDoTitle = document.createElement("div");
       //toDoTitle.innerText = toDoTitle.title;
        //toDoTitle.addEventListener('click', () => console.log("test"));
        //toDoContainer.appendChild(toDoTitle);
    }

export default displayToDos;