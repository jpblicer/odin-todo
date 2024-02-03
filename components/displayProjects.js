function displayProject(Projects, projectContainer) {
    Projects.forEach(Project => {
        const projectTitle = document.createElement("div");
        projectTitle.innerText = Project.title;
        projectContainer.appendChild(projectTitle);
        projectTitle.click = () => {
          alert(Project.description);
        };
    });
}

export default displayProject;