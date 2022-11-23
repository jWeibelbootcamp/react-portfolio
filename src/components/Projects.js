import React from "react";
import CupOTears from "../assets/images/CupOTears.png";
import ProjectCard from "./ProjectCard";

function Projects () {
    const myProjects = [ {id: 1, title: "CupOTears", image: CupOTears}, {id: 2, title: "", image: ""}, {id: 3, title: "", image: ""}, {id: 4, title: "", image: ""}, {id: 5, title: "", image: ""}, {id: 6, title: "", image: ""} ];
    return (
        <div>
            <h1>
                Projects
            </h1>
            <div className="container">
                {myProjects.map(project => (
                   <ProjectCard title={project.title} key={project.id} image={project.image} />
                ))}
            </div>
        </div>
    );
};

export default Projects;