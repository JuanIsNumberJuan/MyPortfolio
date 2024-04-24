import React from "react";
import ProjectData from "./ProjectData";
import CreateCard from "../CreateCard";

function Projects(){
    return (
        <div className = "Projects">
            <h1>Projects</h1>
            <div className = "Container">
                {ProjectData.map(CreateCard)}
            </div>
            
        </div>
    );


}

export default Projects;