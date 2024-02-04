import TodoItem from "./toDo";

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.todos = [];
    }
    addTodo() {
        const title = prompt("Enter todo title:");
        const description = prompt("Enter todo description:");
        const dueDate = prompt("Enter due date (YYYY-MM-DD):");
        const priority = prompt("Enter priority (High, Medium, Low):");

        const todo = new TodoItem(title, description, dueDate, priority);
        
        this.todos.push(todo);
    }
}

export default Project


