import TodoItem from './toDo.js';
import Project from './project.js';

const testTodo = new TodoItem("testName", "testDescript", "1990-01-01", "High");
const testProjecta = new Project("projectTitlea", "Projectdescription");
const testProjectb = new Project("projectTitleb", "Projectdescription");
const Projects = [testProjecta, testProjectb];

export { testTodo, testProjecta, testProjectb, Projects };