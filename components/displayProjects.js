import displayToDos from "./displayToDos";

function displayProject(Projects, projectContainer) {
    Projects.forEach(Project => {
        const projectTitle = document.createElement("div");
        projectTitle.innerText = Project.title;
        projectTitle.addEventListener('click', () => displayToDos(Project,projectTitle));
        projectContainer.appendChild(projectTitle);

    });
}

export default displayProject;


