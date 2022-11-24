import React from "react";
import CupOTears from "../assets/images/cupScreenshot.png";
import ProjectCard from "./ProjectCard";

function Projects () {
    const myProjects = [ 
        {id: 1, url: "https://jweibelbootcamp.github.io/CupOTears/", title: "CupOTears", image: CupOTears, description: "A single-page, reactive website allowing a user to search for various coffee drinks, returning an image, description, ingredients, and nutritional facts. Includes links to a Coffee Guide, maps showing local coffee shops, and a personal notepad saving to local storage.", technology: "Javascript, HTML, CSS"}, 
        
        {id: 2, url: "https://jweibelbootcamp.github.io/CupOTears/", title: "CupOTears", image: CupOTears, description: "A single-page, reactive website allowing a user to search for various coffee drinks, returning an image, description, ingredients, and nutritional facts. Includes links to a Coffee Guide, maps showing local coffee shops, and a personal notepad saving to local storage.", technology: "Javascript, HTML, CSS"}, 
        
        {id: 3, url: "https://jweibelbootcamp.github.io/CupOTears/", title: "CupOTears", image: CupOTears, description: "A single-page, reactive website allowing a user to search for various coffee drinks, returning an image, description, ingredients, and nutritional facts. Includes links to a Coffee Guide, maps showing local coffee shops, and a personal notepad saving to local storage.", technology: "Javascript, HTML, CSS"}, 
        
        {id: 4, url: "https://jweibelbootcamp.github.io/CupOTears/", title: "CupOTears", image: CupOTears, description: "A single-page, reactive website allowing a user to search for various coffee drinks, returning an image, description, ingredients, and nutritional facts. Includes links to a Coffee Guide, maps showing local coffee shops, and a personal notepad saving to local storage.", technology: "Javascript, HTML, CSS"}, 
        
        {id: 5, url: "https://jweibelbootcamp.github.io/CupOTears/", title: "CupOTears", image: CupOTears, description: "A single-page, reactive website allowing a user to search for various coffee drinks, returning an image, description, ingredients, and nutritional facts. Includes links to a Coffee Guide, maps showing local coffee shops, and a personal notepad saving to local storage.", technology: "Javascript, HTML, CSS"}, 
        
        {id: 6, url: "https://jweibelbootcamp.github.io/CupOTears/", title: "CupOTears", image: CupOTears, description: "A single-page, reactive website allowing a user to search for various coffee drinks, returning an image, description, ingredients, and nutritional facts. Includes links to a Coffee Guide, maps showing local coffee shops, and a personal notepad saving to local storage.", technology: "Javascript, HTML, CSS"}
    ];
    
    return (
        <div>
            <h1>
                Projects
            </h1>
            <div className="container">
                {myProjects.map((project) => (
                        <ProjectCard title={project.title} url={project.url} key={project.id} image={project.image} description={project.description} technology={project.technology}/>
                ))}
            </div>
        </div>
    );
};

export default Projects;