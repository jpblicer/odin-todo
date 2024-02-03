function displayProject(Projects, projectContainer) {
    Projects.forEach(Project => {
        const newTitle = document.createElement("div");
        newTitle.innerText = Project.title;
        projectContainer.appendChild(newTitle);
        newTitle.onclick = () => {
          alert(Project.title);
        };
    });
}

export default displayProject;