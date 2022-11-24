import React from "react";
import CupOTears from "../assets/images/cupScreenshot.png";
import Muttel6 from "../assets/images/muttelScreenshot.png";
import TeamGen from "../assets/images/teamScreenshot.png";
import Weather from "../assets/images/weatherScreenshot.png";
import EmployeeTracker from "../assets/images/cmsScreenshot.png";
import ProjectCard from "./ProjectCard";

function Projects () {
    const myProjects = [ 
        {id: 1, url: "https://github.com/jWeibelbootcamp/CupOTears", title: "CupOTears", image: CupOTears, description: "A single-page, reactive website allowing a user to search for various coffee drinks, returning an image, description, ingredients, and nutritional facts. Includes links to a Coffee Guide, maps showing local coffee shops, and a personal notepad saving to local storage.", technology: "Javascript, HTML, CSS"}, 
        
        {id: 2, url: "https://github.com/jWeibelbootcamp/Google-OAuth-Login", title: "Muttel 6", image: Muttel6, description: "A full-stack pet care, lodging, and grooming site utilizing MySQL and Sequelize.", technology: "Javascript, Handlebars, Node.js, Express, MySQL, Sequelize"}, 
        
        {id: 3, url: "https://github.com/jWeibelbootcamp/team-profile-generator", title: "Team Generator", image: TeamGen, description: "A CLI team generator using Inquirer which displays the team in generated HTML.", technology: "Javascript, Node.js, Express, Jest"}, 
        
        {id: 4, url: "https://github.com/jWeibelbootcamp/Weather-Dashboard", title: "Weather Dashboard", image: Weather, description: "A single page weather dashboard application with a a search function, including recent searches saved to local storage. Displays a large card for the current weather with the city name, weather icon, current conditions description, temperature in degrees Farenheit, and humidity.", technology: "Javascript, HTML, CSS, Bootstrap, jQuery"}, 
        
        {id: 5, url: "https://github.com/jWeibelbootcamp/Employee-Tracker", title: "Employee Tracker", image: EmployeeTracker, description: "A Content Management System (CMS) for employees, managers, roles, and departments using Inquirer and MySQL.", technology: "Javascript, Node.js, Express, MySQL"}, 
        
        {id: 6, url: "https://jweibelbootcamp.github.io/CupOTears/", title: "Project 3", image: "", description: "Project 3. TBD.", technology: "Javascript, HTML, CSS"}
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